import ArrowUpRight from '@spectrum-icons/workflow/ArrowUpRight';
import { Text, Button } from '@adobe/react-spectrum';
import React from 'react';
import {
  FetchResult,
  gql,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
  useReactiveVar,
} from '@apollo/client';
import {
  articlesFetchedVar,
  articlesSearchedVar,
  selectedArticlesOnDatabaseVar,
  selectedArticlesOnSearchVar,
} from '../../localState';
import { ArticleExternal } from '../../types/Article';
import {
  internalTemporalToInternalPermanent,
  externalToInternalTemporal,
  internalToMutation,
} from '../../utils';
import { union, unionBy } from 'lodash';

export type SearchFooterProps = {};

const onClick = (
  list: ArticleExternal[],
  selected: string[],
  mutation: (
    options?: MutationFunctionOptions<any, OperationVariables> | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>
) => {
  return async () => {
    const filteredArray = list.filter((item) => selected.includes(item.Id));
    const internalArrayTemporal = externalToInternalTemporal(filteredArray);
    articlesFetchedVar(
      unionBy(internalArrayTemporal, articlesFetchedVar(), 'id')
    );
    selectedArticlesOnSearchVar([]);
    const internalArrayPermanent = await internalTemporalToInternalPermanent(
      internalArrayTemporal
    );
    articlesFetchedVar(
      unionBy(internalArrayPermanent, articlesFetchedVar(), 'id')
    );
    const mutationArray = internalToMutation(internalArrayPermanent);
    for (let i = 0; i < mutationArray.length; i++) {
      const element = mutationArray[i];
      mutation({
        variables: {
          where: { id: element.id },
          create: element,
        },
      });
    }
  };
};

const upsertOneArticle = gql`
  mutation UPSERT_ONE_ARTICLE(
    $where: ArticleWhereUniqueInput!
    $create: ArticleCreateInput!
  ) {
    upsertOneArticle(where: $where, create: $create, update: {}) {
      id
    }
  }
`;

export const SearchFooter: React.FC<SearchFooterProps> = (
  props: SearchFooterProps
) => {
  const list = useReactiveVar(articlesSearchedVar);
  const selected = useReactiveVar(selectedArticlesOnSearchVar);
  const [mutation] = useMutation(upsertOneArticle);

  return (
    <Button variant={'cta'} onPressEnd={onClick(list, selected, mutation)}>
      <ArrowUpRight />
      <Text>Add Articles to the List</Text>
    </Button>
  );
};
