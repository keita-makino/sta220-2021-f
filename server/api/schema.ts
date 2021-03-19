import { nexusPrisma } from "nexus-plugin-prisma";
import {
  makeSchema,
  objectType,
  queryField,
  mutationField,
  list,
  stringArg,
} from "nexus";
import path from "path";

const Author = objectType({
  name: "Author",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.articles();
  },
});

const Journal = objectType({
  name: "Journal",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.articles();
  },
});

const Tag = objectType({
  name: "Tag",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.articles();
  },
});

const Article = objectType({
  name: "Article",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.authors();
    t.model.date();
    t.model.citation();
    t.model.abstract();
    t.model.abstractEmbedding();
    t.model.journal();
    t.model.tags();
  },
});

const Query = queryField((t) => {
  t.crud.authors({
    ordering: {
      name: true,
    },
  });
  t.crud.tags({
    ordering: {
      name: true,
    },
    filtering: { articles: true },
  });
  t.crud.journals({
    ordering: {
      name: true,
    },
  });
  t.crud.articles({
    ordering: {
      name: true,
    },
  });
  t.crud.article();
});

const Mutation = mutationField((t) => {
  t.crud.upsertOneArticle();
  t.crud.updateManyArticle();
  t.crud.deleteOneArticle();
  t.crud.deleteManyArticle();
});

const GetMultipleArticles = queryField("multipleArticles", {
  type: list(Article),
  args: {
    where: list(stringArg()),
  },
  async resolve(_, { where }, ctx) {
    return ctx.prisma.article.findMany({
      where: { id: { in: where } },
    });
  },
});

export const schema = makeSchema({
  types: [Author, Article, Journal, Tag, Query, Mutation, GetMultipleArticles],
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: __dirname + "/../schema.graphql",
    typegen: __dirname + "/generated/nexus.d.ts",
  },
  contextType: {
    module: path.join(__dirname, "./context.ts"),
    export: "Context",
  },
});
