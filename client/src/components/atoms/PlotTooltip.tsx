import React from 'react';
import { Node } from '@nivo/scatterplot';
import { Flex, Heading, View } from '@adobe/react-spectrum';
import { gql, useQuery } from '@apollo/client';
import { articlesFetchedVar } from '../../localState';

export type PlotTooltipProps = any;

export const PlotTooltip: React.FC<PlotTooltipProps> = (
  props: PlotTooltipProps
) => {
  const name = articlesFetchedVar().find(
    (item) => item.id === props.data.articleId
  )?.name;
  return (
    <View
      width={'size-3000'}
      minHeight={'size-300'}
      UNSAFE_style={{
        backgroundColor: 'rgba(255,255,255, 0.5)',
        padding: '1rem',
        textOverflow: 'ellipsis',
      }}
    >
      <Heading level={5} margin={'size-0'}>
        {name}
      </Heading>
    </View>
  );
};
