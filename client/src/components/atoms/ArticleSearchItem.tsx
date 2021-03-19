import { Form, Flex, SearchField } from '@adobe/react-spectrum';
import React, { useEffect, useState } from 'react';
import { isLoadingVar, queryForArticleSearchVar } from '../../localState';
import TextStyle from '@spectrum-icons/workflow/TextStyle';
import UserEdit from '@spectrum-icons/workflow/UserEdit';
import News from '@spectrum-icons/workflow/News';
import Label from '@spectrum-icons/workflow/Label';

export type ArticleSearchFieldProps = {
  type: string;
};

const getIcon = (type: string) => {
  switch (type) {
    case 'title':
      return <TextStyle />;
    case 'author':
      return <UserEdit />;
    case 'journal':
      return <News />;
    case 'tag':
      return <Label />;

    default:
      return undefined;
  }
};

export const ArticleSearchField: React.FC<ArticleSearchFieldProps> = (
  props: ArticleSearchFieldProps
) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text === '') {
      queryForArticleSearchVar({
        ...queryForArticleSearchVar(),
        [props.type]: undefined,
      });
      return;
    }
    const timeout = setTimeout(() => {
      isLoadingVar({ ...isLoadingVar(), search: true });
      queryForArticleSearchVar({
        ...queryForArticleSearchVar(),
        [props.type]: text,
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [props.type, text]);

  return (
    <Form width={'100%'}>
      <Flex
        alignItems={'end'}
        justifyContent={'space-between'}
        columnGap={'size-300'}
      >
        <SearchField
          label={props.type.toUpperCase()}
          onChange={(e) => {
            setText(e);
          }}
          value={text}
          width={'100%'}
          icon={getIcon(props.type)}
        />
      </Flex>
    </Form>
  );
};
