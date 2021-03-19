export type Article = {
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
