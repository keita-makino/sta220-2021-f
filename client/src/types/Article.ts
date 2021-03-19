export type ArticleExternal = {
  Id: string;
  D: Date;
  CC: number;
  DN: string;
  AA: {
    AuId: string;
    DAuN: string;
  }[];
  F: {
    FId: string;
    DFN: string;
  }[];
  FamId: string;
  J: {
    JId: string;
    JN: string;
  };
  IA: {
    IndexLength: number;
    InvertedIndex: {
      [key in string]: number[];
    };
  };
};

export type ArticleInternal = {
  id: string;
  date: Date;
  citation: number;
  name: string;
  authors: {
    id: string;
    name: string;
  }[];
  tags: {
    id: string;
    name: string;
  }[];
  journal:
    | {
        id: string;
        name: string;
      }
    | undefined;
  abstract: string;
  abstractEmbedding: number[];
  status?: string;
};

export type ArticleMutation = {
  id: string;
  date: string;
  citation: number;
  name: string;
  abstract: string;
  abstractEmbedding: { set: number[] };
  authors: {
    connectOrCreate: {
      where: {
        id: string;
      };
      create: {
        id: string;
        name: string;
      };
    }[];
  };
  tags: {
    connectOrCreate: {
      where: {
        id: string;
      };
      create: {
        id: string;
        name: string;
      };
    }[];
  };
  journal:
    | {
        connectOrCreate: {
          where: {
            id: string;
          };
          create: {
            id: string;
            name: string;
          };
        };
      }
    | undefined;
};

export const createAbstract = (invertedAbstract: ArticleExternal['IA']) => {
  const strArray = new Array<string>(invertedAbstract.IndexLength - 1);
  Object.entries(invertedAbstract.InvertedIndex).map((item) => {
    item[1].map((position) => {
      strArray[position] = item[0];
    });
  });
  return strArray
    .slice(strArray[0] === 'Abstract' ? 1 : 0)
    .join(' ')
    .replace(/\s+/, ' ');
};
