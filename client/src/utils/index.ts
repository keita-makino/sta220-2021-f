import Axios from 'axios';
import {
  ArticleExternal,
  ArticleInternal,
  createAbstract,
  ArticleMutation,
} from '../types/Article';

export const externalToInternalTemporal = (
  articlesExternal: ArticleExternal[]
): ArticleInternal[] => {
  return articlesExternal.map(
    (item, index): ArticleInternal => {
      return {
        id: item.Id.toString(),
        date: item.D,
        citation: item.CC,
        name: item.DN,
        abstract: createAbstract(item.IA),
        abstractEmbedding: [],
        authors: item.AA.map((author) => ({
          id: author.AuId.toString(),
          name: author.DAuN,
        })),
        tags: item.F.map((tag) => ({
          id: tag.FId.toString(),
          name: tag.DFN,
        })),
        journal: item.J
          ? {
              id: item.J.JId.toString(),
              name: item.J.JN,
            }
          : undefined,
        status: 'notReady',
      };
    }
  );
};

export const internalTemporalToInternalPermanent = async (
  articlesInternal: ArticleInternal[]
): Promise<ArticleInternal[]> => {
  const abstractTextArray = articlesInternal.map((item) => item.abstract);
  const abstractEmbeddingArray = await createEmbedding(abstractTextArray);
  return articlesInternal.map((item, index) => ({
    ...item,
    abstractEmbedding: abstractEmbeddingArray[index].embedded,
    status: 'embedded',
  }));
};

export const internalToMutation = (
  articlesInternal: ArticleInternal[]
): ArticleMutation[] =>
  articlesInternal.map((item) => {
    const converted = {
      ...item,
      date: new Date(item.date).toISOString(),
      abstractEmbedding: {
        set: item.abstractEmbedding,
      },
      journal: item.journal
        ? {
            connectOrCreate: {
              where: {
                id: item.journal.id,
              },
              create: item.journal,
            },
          }
        : undefined,
      authors: {
        connectOrCreate: item.authors.map((author) => ({
          where: {
            id: author.id,
          },
          create: author,
        })),
      },
      tags: {
        connectOrCreate: item.tags.map((tag) => ({
          where: {
            id: tag.id,
          },
          create: tag,
        })),
      },
    };
    delete converted.status;
    return converted;
  });

async function createEmbedding(abstractTextArray: string[]) {
  return (
    await Axios.post(
      process.env.FUNCTION_URL || 'http://localhost:7071/api/HttpTrigger1',
      abstractTextArray
    )
  ).data;
}
