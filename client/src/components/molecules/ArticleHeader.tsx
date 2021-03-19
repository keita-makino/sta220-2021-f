import { ActionButton, Item, Text } from '@adobe/react-spectrum';
import { useReactiveVar } from '@apollo/client';
import { Flex, Grid } from '@react-spectrum/layout';
import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';
import React from 'react';
import {
  currentIndexVar,
  selectedArticlesOnDatabaseVar,
} from '../../localState';
import { ArticleInternal } from '../../types/Article';
import { ArticleTitle } from '../atoms/ArticleTitle';

type ArticleHeaderProps = ArticleInternal & {};

export const ArticleHeader: React.FC<ArticleHeaderProps> = (
  props: ArticleHeaderProps
) => {
  const length = selectedArticlesOnDatabaseVar().length;
  const current = useReactiveVar(currentIndexVar);
  return (
    <Flex alignContent={'baseline'} justifyContent={'space-between'}>
      <ArticleTitle text={props.name} />
      <Flex alignSelf={'center'} gap={'size-100'}>
        <ActionButton
          width={'size-600'}
          onPressEnd={() => currentIndexVar(current - 1)}
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
          onPressEnd={() => currentIndexVar(current + 1)}
          isDisabled={length - 1 === current}
        >
          <ChevronRight />
        </ActionButton>
      </Flex>
    </Flex>
  );
};
