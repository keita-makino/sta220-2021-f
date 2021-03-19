import React from 'react';
import { Node } from '@nivo/scatterplot';
import { Flex, Heading, View } from '@adobe/react-spectrum';
import { gql, useQuery } from '@apollo/client';

export type PlotTooltipProps = any;

const query = gql`
  query($id: String) {
    article(where: { id: $id }) {
      name
    }
  }
`;

const useArticleInfo = (id: string) => {
  const { data } = useQuery(query, {
    variables: {
      id: id,
    },
  });
  return data;
};

export const PlotTooltip: React.FC<PlotTooltipProps> = (
  props: PlotTooltipProps
) => {
  const data = useArticleInfo(props.data.articleId);

  return data ? (
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
        {data.article?.name}
      </Heading>
    </View>
  ) : null;
};
