import {
  Grid,
  IllustratedMessage,
  ProgressCircle,
  Heading,
  Flex,
  View,
} from '@adobe/react-spectrum';
import { motion } from 'framer-motion';
import React from 'react';
import { useMeasure } from 'react-use';
import { LoadingScreen } from './LoadingScreen';

export type LoadedScreenProps = React.PropsWithChildren<{
  loading: boolean;
  size?: string;
}>;

export const LoadedScreen: React.FC<LoadedScreenProps> = (
  props: LoadedScreenProps
) => {
  const [ref, dimension] = useMeasure<HTMLDivElement>();
  return (
    <Grid position={'relative'} height={'100%'}>
      <motion.div
        ref={ref}
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
        }}
        animate={{
          opacity: -((props.loading ? 1 : 0) - 1),
        }}
        initial={{
          opacity: 0,
        }}
      >
        {props.children}
      </motion.div>
      <View
        position={'absolute'}
        top={0}
        left={0}
        width={'100%'}
        height={'100%'}
        zIndex={0}
      >
        <LoadingScreen
          loading={props.loading}
          dimension={dimension}
          size={props.size as 'S' | 'M' | 'L'}
        />
      </View>
    </Grid>
  );
};
