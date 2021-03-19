import { makeVar } from '@apollo/client';
import { ArticleExternal, ArticleInternal } from '../types/Article';

export type SearchOption = {
  author?: string;
  title?: string;
  tag?: string;
  journal?: string;
};

export type FetchOption = {
  author?: string[];
  tag?: string[];
  journal?: string[];
};

export type SelectedFilter = {
  author?: string;
  tag?: string;
  journal?: string;
};

export const articlesSearchedVar = makeVar<ArticleExternal[]>([]);
export const selectedArticlesOnSearchVar = makeVar<string[]>([]);
export const queryForArticleSearchVar = makeVar<SearchOption>({});

export const articlesFetchedVar = makeVar<ArticleInternal[]>([]);
export const selectedArticlesOnDatabaseVar = makeVar<string[]>([]);
export const queryForArticleFetchVar = makeVar<FetchOption>({});
export const selectedFilterVar = makeVar<SelectedFilter>({});

export const currentIndexVar = makeVar<number>(0);
export const plotLaunchVar = makeVar<number>(0);

export const paramKVar = makeVar<number>(2);

export const isLoadingVar = makeVar<{ [key in string]: boolean }>({
  main: true,
  articleListDatabase: true,
  articleDetails: false,
  fetchOptionAuthor: true,
  fetchOptionJournal: true,
  fetchOptionTag: true,
  plot: false,
  search: false,
});

export const isDarkVar = makeVar<boolean>(false);

export const fields = {
  selectedArticlesOnSearch: {
    read() {
      return selectedArticlesOnSearchVar();
    },
  },
  articlesSearched: {
    read() {
      return articlesSearchedVar();
    },
  },
  queryForArticleSearch: {
    read() {
      return queryForArticleSearchVar();
    },
  },
  selectedArticlesOnDatabase: {
    read() {
      return selectedArticlesOnDatabaseVar();
    },
  },
  articlesFetched: {
    read() {
      return articlesFetchedVar();
    },
  },
  queryForArticleFetch: {
    read() {
      return queryForArticleFetchVar();
    },
  },
  currentIndex: {
    read() {
      return currentIndexVar();
    },
  },
  plotLaunch: {
    read() {
      return plotLaunchVar();
    },
  },
  paramK: {
    read() {
      return paramKVar();
    },
  },
  selectedFilter: {
    read() {
      return selectedFilterVar();
    },
  },
};
