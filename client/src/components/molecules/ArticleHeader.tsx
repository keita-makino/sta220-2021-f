import {
  ActionButton,
  Item,
  ProgressCircle,
  Text,
} from '@adobe/react-spectrum';
import { useReactiveVar } from '@apollo/client';
import { Flex, Grid } from '@react-spectrum/layout';
import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';
import React, { Dispatch, SetStateAction } from 'react';
import {
  currentIndexVar,
  selectedArticlesOnDatabaseVar,
} from '../../localState';
import { ArticleInternal } from '../../types/Article';
import { ArticleTitle } from '../atoms/ArticleTitle';

type ArticleHeaderProps = ArticleInternal & {
  isFetching: boolean;
  setIsFetching: Dispatch<SetStateAction<boolean>>;
};

export const ArticleHeader: React.FC<ArticleHeaderProps> = (
  props: ArticleHeaderProps
) => {
  const length = selectedArticlesOnDatabaseVar().length;
  const current = useReactiveVar(currentIndexVar);
  return (
    <Flex alignContent={'baseline'} justifyContent={'space-between'}>
      <ArticleTitle text={props.name} />
      <Flex alignSelf={'center'} gap={'size-100'}>
        {props.isFetching ? <ProgressCircle isIndeterminate /> : <></>}
        <ActionButton
          width={'size-600'}
          onPressEnd={() => {
            currentIndexVar(current - 1);
            props.setIsFetching(true);
          }}
          isDisabled={current === 0}
        >
          <ChevronLeft />
        </ActionButton>
        <Flex alignSelf={'center'} width={'size-600'} justifyContent={'center'}>
          <Text>
            {current + 1} / {length}
          </Text>
        </Flex>
        <ActionButton
          width={'size-600'}
          onPressEnd={() => {
            currentIndexVar(current + 1);
            props.setIsFetching(true);
          }}
          isDisabled={length - 1 === current}
        >
          <ChevronRight />
        </ActionButton>
      </Flex>
    </Flex>
  );
};
