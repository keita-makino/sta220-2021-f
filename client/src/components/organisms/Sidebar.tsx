import { View } from '@react-spectrum/view';
import React from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { ArticleListSearch } from '../molecules/ArticleListSearch';
import { ArticleListDatabase } from '../molecules/ArticleListDatabase';
import { ArticleSearchPanel } from '../molecules/ArticleSearchPanel';
import { Flex } from '@react-spectrum/layout';
import { DatabaseFooter } from '../molecules/DatabaseFooter';
import { Divider } from '@react-spectrum/divider';
import { SearchFooter } from '../molecules/SearchFooter';
import { Heading } from '@react-spectrum/text';
import { LoadedScreen } from '../molecules/LoadedScreen';
import { useReactiveVar } from '@apollo/client';
import { isLoadingVar } from '../../localState';

type PropsBase = { type?: 'search' | 'database' | null };
export const defaultValue: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = { type: null };
const PropsDefault = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as SidebarDefaultValue };
export type SidebarProps = Props;

export const Sidebar: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = (defaultValue && _props) as Props;
  const isLoading = useReactiveVar(isLoadingVar)['search'];

  if (!props.type) return null;
  return (
    <Flex direction={'column'} rowGap={'size-150'}>
      {props.type === 'search' ? (
        <Heading level={2} margin={'size-0'}>
          Search Articles
        </Heading>
      ) : (
        <Heading level={2} margin={'size-0'}>
          Fetch Database
        </Heading>
      )}
      <Divider size={'S'} />
      <View marginBottom={'size-200'}>
        <ArticleSearchPanel full={props.type === 'search'} />
      </View>
      <Divider size={'S'} />
      {props.type === 'search' ? (
        <>
          <LoadedScreen loading={isLoading}>
            <Scrollbar>
              <ArticleListSearch />
            </Scrollbar>
          </LoadedScreen>
          <Divider size={'S'} />
          <View alignSelf={'flex-end'}>
            <SearchFooter />
          </View>
        </>
      ) : (
        <>
          <Scrollbar>
            <ArticleListDatabase />
          </Scrollbar>
          <Divider size={'S'} />
          <View alignSelf={'flex-end'}>
            <DatabaseFooter />
          </View>
        </>
      )}
    </Flex>
  );
};
Sidebar.defaultProps = defaultValue;
