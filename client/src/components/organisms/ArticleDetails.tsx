import {
  ActionButton,
  Divider,
  Header,
  Heading,
  IllustratedMessage,
  View,
  Text,
  minmax,
} from '@adobe/react-spectrum';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { Flex, Grid } from '@react-spectrum/layout';
import MagicWand from '@spectrum-icons/workflow/MagicWand';
import React, { useEffect, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import {
  currentIndexVar,
  isLoadingVar,
  queryForArticleFetchVar,
  selectedArticlesOnDatabaseVar,
  selectedFilterVar,
} from '../../localState';
import { ArticleInternal } from '../../types/Article';
import { ArticleHeader } from '../molecules/ArticleHeader';
import { LoadedScreen } from '../molecules/LoadedScreen';

type PropsBase = {};
export const defaultValue: Required<
  Pick<PropsBase, { [Key in keyof PropsBase]-?: Key }[keyof PropsBase]>
> = {};
const PropsDefault = defaultValue;
type Props = PropsBase & typeof PropsDefault;

export { defaultValue as ArticleDetailsDefaultValue };
export type ArticleDetailsProps = Props;

const getArticleDetails = gql`
  query($where: [String]) {
    multipleArticles(where: $where) {
      id
      name
      authors {
        id
        name
        articles {
          id
        }
      }
      date
      citation
      abstract
      journal {
        id
        name
        articles {
          id
        }
      }
      tags {
        id
        name
        articles {
          id
        }
      }
    }
  }
`;

const onClick = (type: string, item: any) => {
  selectedFilterVar({ ...selectedFilterVar(), [type]: item.id });
  queryForArticleFetchVar({
    ...queryForArticleFetchVar(),
    [type]: item.articles.map((item: any) => item.id),
  });
};

export const ArticleDetails: React.FC<PropsBase> = (_props: PropsBase) => {
  const props = (defaultValue && _props) as Props;
  const selectedArticles = useReactiveVar(selectedArticlesOnDatabaseVar);
  const { data } = useQuery(getArticleDetails, {
    variables: {
      where: selectedArticles,
    },
    onCompleted: () => {
      currentIndexVar(selectedArticles.length - 1);
      setTimeout(
        () => isLoadingVar({ ...isLoadingVar(), articleDetails: false }),
        500
      );
    },
  });
  const isLoading = useReactiveVar(isLoadingVar)['articleDetails'];
  const current = useReactiveVar(currentIndexVar);

  const [article, setArticle] = useState<ArticleInternal | null>(null);

  useEffect(() => {
    isLoadingVar({
      ...isLoadingVar(),
      articleDetails: selectedArticles.length !== 0,
    });
  }, [selectedArticles]);

  useEffect(() => {
    if (data) {
      setArticle(data.multipleArticles[current]);
      if (isLoadingVar()['articleListDatabase']) {
        isLoadingVar({ ...isLoadingVar(), articleListDatabase: false });
      }
    }
  }, [current, data]);

  return (
    <LoadedScreen loading={isLoading}>
      <Grid height={'100%'}>
        {article ? (
          <Grid rows={['size-800', '0.5rem', 'auto']} width={'100%'}>
            <ArticleHeader {...article} />
            <Divider size={'S'} />
            <Scrollbar>
              <Grid
                columns={['size-2000', 'auto']}
                columnGap={'size-200'}
                rowGap={'size-100'}
                UNSAFE_style={{ overflowY: 'hidden' }}
                marginTop={'size-200'}
                marginBottom={'size-200'}
              >
                <View
                  alignSelf={'center'}
                  UNSAFE_style={{ fontWeight: 700, textAlign: 'right' }}
                >
                  ID:
                </View>
                <View>{article.id}</View>
                <View
                  alignSelf={'center'}
                  UNSAFE_style={{ fontWeight: 700, textAlign: 'right' }}
                >
                  Authors:
                </View>
                <Flex gap={'size-50'}>
                  {article.authors.map((item: any) => (
                    <ActionButton onPressEnd={() => onClick('author', item)}>
                      {item.name}
                    </ActionButton>
                  ))}
                </Flex>
                {article.journal ? (
                  <>
                    <View
                      alignSelf={'center'}
                      UNSAFE_style={{ fontWeight: 700, textAlign: 'right' }}
                    >
                      Journal:
                    </View>
                    <View>
                      <ActionButton
                        onPressEnd={() => onClick('journal', article.journal!)}
                      >
                        {article.journal.name}
                      </ActionButton>
                    </View>
                  </>
                ) : null}
                <View
                  alignSelf={'center'}
                  UNSAFE_style={{ fontWeight: 700, textAlign: 'right' }}
                >
                  Publish Date:
                </View>
                <View>{new Date(article.date).toLocaleDateString()}</View>
                <View
                  alignSelf={'center'}
                  UNSAFE_style={{ fontWeight: 700, textAlign: 'right' }}
                >
                  Tags:
                </View>
                <Flex gap={'size-50'} wrap>
                  {article.tags.map((item: any) => (
                    <ActionButton onPressEnd={() => onClick('tag', item)}>
                      {item.name}
                    </ActionButton>
                  ))}
                </Flex>
                <View
                  alignSelf={'center'}
                  UNSAFE_style={{ fontWeight: 700, textAlign: 'right' }}
                >
                  Num. of Citations:
                </View>
                <View>{article.citation}</View>
                <View UNSAFE_style={{ fontWeight: 700, textAlign: 'right' }}>
                  Abstract:
                </View>
                <View UNSAFE_style={{ textAlign: 'justify' }}>
                  {article.abstract}
                </View>
              </Grid>
            </Scrollbar>
          </Grid>
        ) : (
          <Grid>
            <Flex width={'100%'} justifyContent={'center'} alignSelf={'center'}>
              <IllustratedMessage>
                <MagicWand color={'informative'} size={'XXL'} />
                <Heading>Welcome!</Heading>
                <Text>Select a question from the side bar to proceed.</Text>
              </IllustratedMessage>
            </Flex>
          </Grid>
        )}
      </Grid>
    </LoadedScreen>
  );
};
ArticleDetails.defaultProps = defaultValue;
