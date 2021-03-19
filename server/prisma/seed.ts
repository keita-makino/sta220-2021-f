import Axios from "axios";
import { PrismaClient } from "@prisma/client";
import { Article } from "./article";
import { uniqBy } from "lodash";

const authorList = [2175418219];

const prisma = new PrismaClient();

const seed = async () => {
  const articles = (
    await Promise.all(
      authorList.map(
        async (author): Promise<Article[]> =>
          (
            await Axios.get(
              "https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate",
              {
                params: {
                  expr: `And(Composite(AA.AuId=${author}), D>='1970-01-01')`,
                  count: 500,
                  attributes:
                    "D,CC,AA.DAuN,AA.AuId,DN,Id,S,F.DFN,F.FId,FP,J.JId,J.JN,IA,FamId",
                  "subscription-key": process.env.API_KEY,
                },
              }
            )
          ).data.entities.filter(
            (item) => item.IA && (item.FamId === item.Id || !item.FamId)
          )
      )
    )
  ).flat();

  const seeded = await seedArticle(articles);

  return seeded;
};

const seedArticle = async (articles: Article[]) => {
  const embeddingList = await getEmbedding(
    articles.map((item) => (item.IA ? createAbstract(item.IA) : ""))
  );
  const articleList = articles.map(async (item, index) => {
    return {
      id: item.Id.toString(),
      name: item.DN,
      citation: item.CC,
      date: new Date(item.D).toISOString(),
      abstract: item.IA ? createAbstract(item.IA) : undefined,
      abstractEmbedding: item.IA
        ? { set: embeddingList[index].embedded }
        : undefined,
      authors: {
        connectOrCreate: uniqBy(item.AA, "AuId").map((item) => ({
          where: { id: getAuthorDetails(item).id },
          create: getAuthorDetails(item),
        })),
      },
      tags: item.F
        ? {
            connectOrCreate: uniqBy(item.F, "FId").map((item) => ({
              where: { id: getTagDetails(item).id },
              create: getTagDetails(item),
            })),
          }
        : undefined,
      journal: item.J
        ? {
            connectOrCreate: {
              where: { id: getJournalDetails(item.J).id },
              create: getJournalDetails(item.J),
            },
          }
        : undefined,
    };
  });

  for (let i = 0; i < articleList.length; i++) {
    const item = await articleList[i];
    await prisma.article.upsert({
      where: {
        id: item.id.toString(),
      },
      update: item,
      create: item,
    });
  }

  return;
};

const getEmbedding = async (abstracts: string[]) => {
  return (await Axios.post(process.env.FUNCTION_URL, abstracts)).data;
};

const createAbstract = (invertedAbstract: Article["IA"]) => {
  const strArray = new Array<string>(invertedAbstract.IndexLength - 1);
  Object.entries(invertedAbstract.InvertedIndex).map((item) => {
    item[1].map((position) => {
      strArray[position] = item[0];
    });
  });
  return strArray
    .slice(strArray[0] === "Abstract" ? 1 : 0)
    .join(" ")
    .replace(/\s+/, " ");
};

const getAuthorDetails = (item: { AuId: string; DAuN: any }) => ({
  id: item.AuId.toString(),
  name: item.DAuN,
});
const getTagDetails = (item: { FId: string; DFN: any }) => ({
  id: item.FId.toString(),
  name: item.DFN,
});
const getJournalDetails = (item: { JId: string; JN: any }) => ({
  id: item.JId.toString(),
  name: item.JN,
});

(async () => {
  seed()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
})();
