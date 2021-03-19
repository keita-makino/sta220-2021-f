import Send from '@spectrum-icons/workflow/Send';
import {
  Text,
  Button,
  Flex,
  Grid,
  View,
  TextField,
  Slider,
} from '@adobe/react-spectrum';
import React from 'react';
import {
  articlesFetchedVar,
  isLoadingVar,
  paramKVar,
  plotLaunchVar,
  queryForArticleFetchVar,
  selectedArticlesOnDatabaseVar,
  selectedFilterVar,
} from '../../localState';
import Delete from '@spectrum-icons/workflow/Delete';
import {
  FetchResult,
  gql,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
  useReactiveVar,
} from '@apollo/client';
import { differenceBy } from 'lodash';
import Erase from '@spectrum-icons/workflow/Erase';

export type DatabaseFooterProps = {};

const deleteSelectedArticlesOnDatabase = (
  mutation: (
    options?: MutationFunctionOptions<any, OperationVariables> | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>
) => () => {
  const array = selectedArticlesOnDatabaseVar();
  const list = articlesFetchedVar();
  mutation({
    variables: {
      where: array.map((item) => item.toString()),
    },
  }).then(() => {
    selectedArticlesOnDatabaseVar([]);
    articlesFetchedVar(
      differenceBy(
        list,
        array.map((item) => ({ id: item })),
        'id'
      )
    );
  });
};

const deleteArticles = gql`
  mutation DELETE_ARTICLES($where: [String!]) {
    deleteManyArticle(where: { id: { in: $where } }) {
      count
    }
  }
`;

export const DatabaseFooter: React.FC<DatabaseFooterProps> = (
  props: DatabaseFooterProps
) => {
  const [mutation] = useMutation(deleteArticles);
  const paramK = useReactiveVar(paramKVar);

  return (
    <Grid gap={'size-200'} columns={['4fr', '6fr']}>
      <Button
        alignSelf={'center'}
        variant={'secondary'}
        onPressEnd={() => {
          selectedArticlesOnDatabaseVar([]);
          selectedFilterVar({});
          queryForArticleFetchVar({});
          plotLaunchVar(0);
        }}
      >
        <Erase />
        <Text>Clear</Text>
      </Button>
      <Slider
        width={'size-2000'}
        label="k for k-means"
        value={paramK}
        onChange={(value) => paramKVar(value)}
        minValue={2}
        maxValue={8}
      />
      <Button
        variant={'secondary'}
        onPressEnd={deleteSelectedArticlesOnDatabase(mutation)}
      >
        <Delete />
        <Text>Delete</Text>
      </Button>
      <Button
        variant={'cta'}
        onPressEnd={() => {
          plotLaunchVar(plotLaunchVar() + 1);
          isLoadingVar({ ...isLoadingVar(), plot: true });
        }}
      >
        <Send />
        <Text>Run k-means</Text>
      </Button>
    </Grid>
  );
};
