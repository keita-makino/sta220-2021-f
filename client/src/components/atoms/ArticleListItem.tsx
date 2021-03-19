import { ActionButton, Text, View } from '@adobe/react-spectrum';
import React from 'react';
import { ArticleExternal, ArticleInternal } from '../../types/Article';
import Checkmark from '@spectrum-icons/workflow/Checkmark';
import { schemeSet2 } from 'd3-scale-chromatic';
import hexToRgba from 'hex-to-rgba';

export type ArticleListItemProps = {
  item: Partial<ArticleInternal & ArticleExternal> & { color?: number };
  type: 'search' | 'database';
  onClick: (id?: string) => void;
  selected: boolean;
};

export const ArticleListItem: React.FC<ArticleListItemProps> = (
  props: ArticleListItemProps
) => {
  return (
    <ActionButton
      onPressEnd={() =>
        props.onClick(props.item[props.type === 'search' ? 'Id' : 'id'])
      }
      isDisabled={
        props.type === 'search' ? false : props.item.status === 'notReady'
      }
      UNSAFE_style={{
        backgroundColor:
          props.item.color !== undefined
            ? hexToRgba(schemeSet2[props.item.color], '0.25')
            : props.selected
            ? 'rgba(200,200,255,0.5)'
            : undefined,
      }}
    >
      <Text UNSAFE_style={{ textAlign: 'left' }}>
        {props.item[props.type === 'search' ? 'DN' : 'name']}
      </Text>
      {props.selected ? <Checkmark color={'positive'} /> : null}
    </ActionButton>
  );
};
