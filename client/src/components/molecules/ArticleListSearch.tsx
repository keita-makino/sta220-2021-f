import { useReactiveVar } from '@apollo/client';
import {
  Grid,
  ActionButton,
  Text,
  Heading,
  IllustratedMessage,
  ProgressCircle,
} from '@adobe/react-spectrum';
import React, { useEffect } from 'react';
import {
  articlesSearchedVar,
  isLoadingVar,
  queryForArticleSearchVar,
  SearchOption,
  selectedArticlesOnSearchVar,
} from '../../localState';
import Axios from 'axios';
import { ArticleExternal } from '../../types/Article';
import { ArticleListItem } from '../atoms/ArticleListItem';
import { xor } from 'lodash';
import GlobeSearch from '@spectrum-icons/workflow/GlobeSearch';

type PropsBase = {};
export const defaultValue: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = {};
const PropsDefault = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as ArticleListSearchDefaultValue };
export type ArticleListSearchProps = Props;

const onClick = (id?: string) => {
  if (id) {
    selectedArticlesOnSearchVar(xor(selectedArticlesOnSearchVar(), [id]));
  }
};

const getArticleListSearch = async (
  options: SearchOption
): Promise<ArticleExternal[]> => {
  if (options && Object.values(options).filter((item) => item).length > 0) {
    const core = `${
      options.author
        ? `Composite(AA.AuN='${options.author.toLowerCase()}'), `
        : ''
    }${options.title ? `Ti='${options.title.toLowerCase()}'..., ` : ''}${
      options.journal
        ? `Composite(J.JN='${options.journal.toLowerCase()}'), `
        : ''
    }${
      options.tag ? `Composite(F.FN='${options.tag.toLowerCase()}')` : ''
    }`.replace(/, $/, '');
    const articles: ArticleExternal[] = (
      await Axios.get(
        'https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate',
        {
          params: {
            expr: `And(${core})`,
            count: 100,
            attributes:
              'D,CC,AA.DAuN,AA.AuId,DN,Id,S,F.DFN,F.FId,FP,J.JId,J.JN,IA,FamId',
            'subscription-key': process.env.REACT_APP_API_KEY,
          },
        }
      )
    ).data?.entities;
    return articles
      .filter((item) => item.IA && (item.FamId === item.Id || !item.FamId))
      .sort((a, b) => (a.DN < b.DN ? -1 : 1));
  } else {
    return [];
  }
};

export const ArticleListSearch: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = (defaultValue && _props) as Props;
  const options = useReactiveVar(queryForArticleSearchVar);
  const list = useReactiveVar(articlesSearchedVar);
  const selectedList = useReactiveVar(selectedArticlesOnSearchVar);

  useEffect(() => {
    const set = async (options: SearchOption) => {
      articlesSearchedVar(await getArticleListSearch(options));
    };
    set(options).then(() =>
      setTimeout(() => isLoadingVar({ ...isLoadingVar(), search: false }), 500)
    );
  }, [options]);

  return (
    <Grid width={'100%'} gap={'size-75'}>
      {list ? (
        list.length === 0 ? (
          <IllustratedMessage marginTop={'size-400'}>
            <GlobeSearch color={'notice'} size={'XXL'} />
            <Heading>Search</Heading>
            <Text>
              Search articles on{' '}
              <a
                href={'https://academic.microsoft.com/home'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                Microsoft Academic
              </a>
              .
            </Text>
          </IllustratedMessage>
        ) : (
          list.map((item) => (
            <ArticleListItem
              item={item}
              type={'search'}
              onClick={onClick}
              selected={selectedList.includes(item.Id)}
            />
          ))
        )
      ) : null}
    </Grid>
  );
};
ArticleListSearch.defaultProps = defaultValue;
