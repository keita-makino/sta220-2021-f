import { Grid, Heading, View } from '@adobe/react-spectrum';
import React from 'react';

export type ArticleTitleProps = { text: string };

export const ArticleTitle: React.FC<ArticleTitleProps> = (
  props: ArticleTitleProps
) => {
  return (
    <View>
      <Heading level={2} margin={'size-0'}>
        {props.text}
      </Heading>
    </View>
  );
};
