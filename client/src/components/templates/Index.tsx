import React, { useEffect } from 'react';
import { ArticleDetails } from '../organisms/ArticleDetails';
import { Sidebar } from '../organisms/Sidebar';
import { PlotArea } from '../organisms/PlotArea';
import { LoadedScreen } from '../molecules/LoadedScreen';
import { useReactiveVar } from '@apollo/client';
import { isDarkVar, isLoadingVar } from '../../localState';
import { useWindowSize } from 'react-use';
import Scrollbar from 'react-scrollbars-custom';
import {
  ActionButton,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  minmax,
  Switch,
  View,
} from '@adobe/react-spectrum';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';
import logo from '../../images/github.png';

export type IndexProps = {};

export const IndexTemplate: React.FC<IndexProps> = (props: IndexProps) => {
  const windowSize = useWindowSize();
  const isLoading = useReactiveVar(isLoadingVar);

  useEffect(() => {
    if (
      isLoading['main'] &&
      !isLoading['articleListDatabase'] &&
      !isLoading['fetchOptionAuthor'] &&
      !isLoading['fetchOptionJournal'] &&
      !isLoading['fetchOptionTag']
    ) {
      isLoadingVar({ ...isLoadingVar(), main: false });
    }
  }, [isLoading]);

  return (
    <LoadedScreen loading={isLoading['main']}>
      <Grid
        areas={[
          'header header header header header',
          'sidebar1 divider1 sidebar2 divider2 main',
        ]}
        columns={['20rem', '0.25rem', '20rem', '0.25rem', 'auto']}
        rows={['4rem', 'auto']}
        height={windowSize.height}
        width={windowSize.width}
      >
        <Grid gridArea={'header'} height={'4rem'}>
          <View backgroundColor={'gray-400'}>
            <Flex
              justifyContent={'space-between'}
              alignContent={'center'}
              height={'4rem'}
            >
              <Heading level={3} marginStart={'size-200'}>
                IevA - Interactive exploration and visualization tool of
                academic Articles
              </Heading>
              <Grid alignItems={'center'} columns={['size-1000', 'size-600']}>
                <Flex alignItems={'center'}>
                  <Light size={'S'} />
                  <Switch
                    margin={'size-75'}
                    onChange={(isSelected) => {
                      if (isSelected) {
                        isDarkVar(true);
                      } else {
                        isDarkVar(false);
                      }
                    }}
                  />
                  <Moon size={'S'} />
                </Flex>
                <ActionButton
                  isQuiet
                  UNSAFE_style={{ cursor: 'pointer' }}
                  onPressEnd={() =>
                    window.open(
                      'https://github.com/keita-makino/sta220-2021-f',
                      '_blank'
                    )
                  }
                >
                  <Image
                    alt={'GitHub'}
                    src={logo}
                    height={'2rem'}
                    width={'2rem'}
                    UNSAFE_style={{ opacity: 0.6 }}
                  />
                </ActionButton>
              </Grid>
            </Flex>
          </View>
        </Grid>
        <Grid
          gridArea={'sidebar1'}
          margin={'1rem'}
          UNSAFE_style={{ overflow: 'hidden' }}
        >
          <Sidebar type={'search'} />
        </Grid>
        <Grid gridArea={'divider1'}>
          <Divider orientation={'vertical'} size={'M'} />
        </Grid>
        <Grid
          gridArea={'sidebar2'}
          margin={'1rem'}
          UNSAFE_style={{ overflow: 'hidden' }}
        >
          <Sidebar type={'database'} />
        </Grid>
        <Grid gridArea={'divider2'}>
          <Divider orientation={'vertical'} size={'M'} />
        </Grid>
        <Scrollbar>
          <Grid
            gridArea={'main'}
            margin={'1rem'}
            alignContent={'start'}
            areas={['details', 'divider', 'plot']}
            rows={[
              minmax('size-4600', '40vh'),
              'auto',
              minmax('36rem', '48vh'),
            ]}
            alignItems={'stretch'}
          >
            <ArticleDetails />
            <Divider size={'M'} />
            <PlotArea />
          </Grid>
        </Scrollbar>
      </Grid>
    </LoadedScreen>
  );
};
