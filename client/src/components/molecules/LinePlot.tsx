import { useReactiveVar } from '@apollo/client';
import { ResponsiveLine } from '@nivo/line';
import { max } from 'lodash';
import React from 'react';
import { isDarkVar } from '../../localState';

export type LinePlotProps = { data: any };

export const LinePlot: React.FC<LinePlotProps> = (props: LinePlotProps) => {
  const plotData = [
    {
      id: 'prl',
      data: props.data.prl.map((item: any, index: any) => ({
        x: index + 1,
        y: Math.round(item * 10000) / 100,
      })),
    },
  ];
  const isDark = useReactiveVar(isDarkVar);

  return (
    <>
      <ResponsiveLine
        data={plotData}
        margin={{ top: 40, right: 40, bottom: 100, left: 100 }}
        xScale={{
          type: 'linear',
          min: 0,
          max: props.data.prl.length + 1,
        }}
        yScale={{
          type: 'linear',
          min: 0,
          max: (max(props.data.prl) as number) * 110,
        }}
        axisBottom={{
          legend: 'Dimension',
          legendPosition: 'middle',
          legendOffset: 50,
        }}
        axisLeft={{
          legend: `Importance (%)`,
          legendPosition: 'middle',
          legendOffset: -50,
        }}
        theme={{
          textColor: isDark ? '#DDDDDD' : '#333333',
        }}
        useMesh={true}
      />
    </>
  );
};
