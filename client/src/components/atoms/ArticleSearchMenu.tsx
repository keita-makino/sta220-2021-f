import { Form, Flex, Text } from '@adobe/react-spectrum';
import React, { useEffect, useState } from 'react';
import {
  currentIndexVar,
  isDarkVar,
  isLoadingVar,
  queryForArticleFetchVar,
  selectedFilterVar,
} from '../../localState';
import UserEdit from '@spectrum-icons/workflow/UserEdit';
import News from '@spectrum-icons/workflow/News';
import Label from '@spectrum-icons/workflow/Label';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { capitalize } from 'lodash';
import Select from 'react-select';

export type ArticleSearchMenuProps = {
  type: string;
};

export const getItems = (type: string) => gql`
  query {
    ${type}(orderBy: {name: asc}) {
      id
      name
      articles{
        id
      }
    }
  }
`;

export const ArticleSearchMenu: React.FC<ArticleSearchMenuProps> = (
  props: ArticleSearchMenuProps
) => {
  const { data } = useQuery(getItems(`${props.type}s`));
  const selected = useReactiveVar(selectedFilterVar);
  const [array, setArray] = useState<{ value: string; label: string }[]>([]);
  const isDark = useReactiveVar(isDarkVar);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      if (isLoadingVar()[`fetchOption${capitalize(props.type)}`]) {
        isLoadingVar({
          ...isLoadingVar(),
          [`fetchOption${capitalize(props.type)}`]: false,
        });
      }
      setArray(
        data[`${props.type}s`].map((item: any) => ({
          value: item.id,
          label: item.name
            .split(' ')
            .map((item: string) => capitalize(item))
            .join(' '),
        }))
      );
    }
  }, [data, props.type]);

  return (
    <Form width={'100%'}>
      <Flex
        alignItems={'end'}
        justifyContent={'space-between'}
        columnGap={'size-300'}
      >
        {data ? (
          <div style={{ width: '100%' }}>
            <Text>{props.type.toUpperCase()}</Text>
            <Select
              value={{
                label: array.find(
                  (item) =>
                    item.value === selected[props.type as keyof typeof selected]
                )?.label,
                value: selected[props.type as keyof typeof selected],
              }}
              options={array}
              onChange={(key) => {
                if (key) {
                  selectedFilterVar({ ...selected, [props.type]: key.value });
                  queryForArticleFetchVar({
                    ...queryForArticleFetchVar(),
                    [props.type]: data[`${props.type}s`]
                      .find((item: any) => item.id === key.value)
                      .articles.map((item: any) => item.id),
                  });
                  currentIndexVar(0);
                }
              }}
              onMenuOpen={() => setIsOpen(true)}
              onMenuClose={() => setIsOpen(false)}
              onKeyDown={(event) => {
                !isOpen && event.code === 'enter' && event.preventDefault();
              }}
              theme={(theme) => ({
                ...theme,
                colors: isDark
                  ? {
                      ...theme.colors,
                      neutral0: '#282828',
                      neutral5: '#282828',
                      neutral10: '#282828',
                      neutral20: '#777777',
                      neutral30: '#777777',
                      neutral70: '#CCCCCC',
                      neutral80: '#CCCCCC',
                      neutral90: '#CCCCCC',
                      primary25: '#2266DD',
                    }
                  : theme.colors,
              })}
            />
          </div>
        ) : (
          <></>
        )}
      </Flex>
    </Form>
  );
};
