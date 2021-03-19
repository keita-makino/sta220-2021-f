import {
  Divider,
  Flex,
  Grid,
  Heading,
  IllustratedMessage,
  View,
  Text,
} from '@adobe/react-spectrum';
import { useReactiveVar } from '@apollo/client';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { isLoadingVar, paramKVar, plotLaunchVar } from '../../localState';
import { useMeasure, useWindowSize } from 'react-use';
import { ScatterPlot } from '../molecules/ScatterPlot';
import MagicWand from '@spectrum-icons/workflow/MagicWand';
import DataMapping from '@spectrum-icons/workflow/DataMapping';
import { LoadedScreen } from '../molecules/LoadedScreen';
import { LinePlot } from '../molecules/LinePlot';

export type PlotAreaProps = {};

export const usePlotData = (
  plotLaunch: number
): null | { range: any; data: any[] } => {
  const [value, setValue] = useState(null);
  const [currentLaunch, setcurrentLaunch] = useState(0);

  useEffect(() => {
    if (plotLaunch > currentLaunch) {
      const fetch = async () => {
        const response = await axios.post(
          'https://sta220-2021-f.herokuapp.com/kmeans',
          {
            data: {
              k: paramKVar(),
            },
          }
        );
        setValue(response.data);
        setcurrentLaunch(plotLaunch);
      };
      fetch().then(() =>
        setTimeout(() => isLoadingVar({ ...isLoadingVar(), plot: false }), 1000)
      );
    }
  }, [currentLaunch, plotLaunch]);
  return value;
};

export const PlotArea: React.FC<PlotAreaProps> = (props: PlotAreaProps) => {
  const plotLaunch = useReactiveVar(plotLaunchVar);
  const plotData = usePlotData(plotLaunch);
  const isLoading = useReactiveVar(isLoadingVar)['plot'];

  return (
    <LoadedScreen loading={isLoading}>
      <Grid height={'100%'} columns={['1fr', '1fr']} areas={['C C']}>
        {plotData ? (
          <>
            <Grid rows={['4rem', 'auto', '36rem']}>
              <Flex>
                <Heading level={2}>K-Means Clustering</Heading>
              </Flex>
              <Divider size={'S'} />
              <ScatterPlot data={plotData} />
            </Grid>
            <Grid rows={['4rem', 'auto', '36rem']}>
              <Flex>
                <Heading level={2}>Principal Component Analysis</Heading>
              </Flex>
              <Divider size={'S'} />
              <LinePlot data={plotData} />
            </Grid>
          </>
        ) : (
          <Flex
            width={'100%'}
            justifyContent={'center'}
            alignSelf={'center'}
            gridArea={'C'}
          >
            <IllustratedMessage>
              <DataMapping color={'positive'} size={'XXL'} />
              <Heading>Plotting</Heading>
              <Text>Hit "Run k-means" to generate a plot.</Text>
            </IllustratedMessage>
          </Flex>
        )}
      </Grid>
    </LoadedScreen>
  );
};
