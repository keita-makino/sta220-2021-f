import { Grid } from '@react-spectrum/layout';
import React from 'react';
import { ArticleSearchField } from '../atoms/ArticleSearchItem';
import { ArticleSearchMenu } from '../atoms/ArticleSearchMenu';

type PropsBase = { full: boolean };
export const defaultValue: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = { full: true };
const PropsDefault = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as ArticleSearchPanelDefaultValue };
export type ArticleSearchPanelProps = Props;

export const ArticleSearchPanel: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = (defaultValue && _props) as Props;
  const list = props.full
    ? ['title', 'author', 'journal', 'tag']
    : ['author', 'journal', 'tag'];

  return (
    <Grid>
      {props.full
        ? list.map((item) => <ArticleSearchField type={item} />)
        : list.map((item) => <ArticleSearchMenu type={item} />)}
    </Grid>
  );
};
ArticleSearchPanel.defaultProps = defaultValue;
