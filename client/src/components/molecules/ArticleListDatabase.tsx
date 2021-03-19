import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { Grid } from '@react-spectrum/layout';
import { intersection, xor } from 'lodash';
import React, { useEffect } from 'react';
import {
  articlesFetchedVar,
  currentIndexVar,
  plotLaunchVar,
  queryForArticleFetchVar,
  selectedArticlesOnDatabaseVar,
} from '../../localState';
import { ArticleInternal } from '../../types/Article';
import { ArticleListItem } from '../atoms/ArticleListItem';
import { usePlotData } from '../organisms/PlotArea';

type PropsBase = {};
export const defaultValue: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = {};
const PropsDefault = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as ArticleListDatabaseDefaultValue };
export type ArticleListDatabaseProps = Props;

const onClick = (id?: string) => {
  if (id) {
    const newArray = xor(selectedArticlesOnDatabaseVar(), [id]);
    selectedArticlesOnDatabaseVar(newArray);
    currentIndexVar(newArray.length - 1);
  }
};

const getArticles = gql`
  query {
    articles {
      id
      name
    }
  }
`;

export const ArticleListDatabase: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = (defaultValue && _props) as Props;
  const { data } = useQuery<{ articles: ArticleInternal[] }>(getArticles);
  const options = useReactiveVar(queryForArticleFetchVar);
  const articleList = useReactiveVar(articlesFetchedVar);
  const selectedList = useReactiveVar(selectedArticlesOnDatabaseVar);
  const plotLaunch = useReactiveVar(plotLaunchVar);
  const plotData = usePlotData(plotLaunch);

  useEffect(() => {
    const array = Object.values(options).filter((item) => item);
    if (array.length) {
      selectedArticlesOnDatabaseVar(
        intersection(array.reduce((prev, curr) => intersection(prev, curr)))
      );
    }
  }, [options]);

  useEffect(() => {
    const colorArray = plotData?.data
      .map((item, index) =>
        item.data.map((item2: any) => ({ cat: index, id: item2.articleId }))
      )
      .flat();
    if (data) {
      articlesFetchedVar(
        [...data.articles]
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((item) => ({
            ...item,
            color: colorArray?.find((item2) => item2.id === item.id).cat,
          }))
      );
    }
  }, [data, plotData?.data]);

  return (
    <Grid width={'100%'} gap={'size-75'} UNSAFE_style={{ textAlign: 'left' }}>
      {articleList
        ? articleList.length === 0
          ? 'no articles'
          : articleList.map((item) => (
              <ArticleListItem
                item={item}
                type={'database'}
                onClick={onClick}
                selected={selectedList.includes(item.id)}
              />
            ))
        : null}
    </Grid>
  );
};
ArticleListDatabase.defaultProps = defaultValue;
