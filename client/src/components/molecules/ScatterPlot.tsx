import { useReactiveVar } from '@apollo/client';
import { Node, ResponsiveScatterPlot } from '@nivo/scatterplot';
import { xor } from 'lodash';
import React, { useState } from 'react';
import {
  articlesFetchedVar,
  currentIndexVar,
  isDarkVar,
  selectedArticlesOnDatabaseVar,
} from '../../localState';
import { PlotTooltip } from '../atoms/PlotTooltip';

export type ScatterPlotProps = { data: any };

const createCustomNode = (selected: string[], highlightIndex: number) => ({
  node,
  x,
  y,
  size,
  color,
  blendMode,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onClick,
}: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      {selected.includes(node.data.articleId) ? (
        node.data.articleId === selected[highlightIndex] ? (
          <polygon
            points={'0,-16.5 -9,12 13.5,-6 -13.5,-6 9,12'}
            fill={color}
            style={{ mixBlendMode: blendMode }}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          />
        ) : (
          <rect
            x={size * -0.5}
            y={size * -0.5}
            width={size}
            height={size}
            fill={color}
            style={{ mixBlendMode: blendMode }}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          />
        )
      ) : (
        <circle
          r={size / 2}
          fill={color}
          style={{ mixBlendMode: blendMode }}
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      )}
    </g>
  );
};

export const ScatterPlot: React.FC<ScatterPlotProps> = (
  props: ScatterPlotProps
) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const plotData = props.data;
  const selected = useReactiveVar(selectedArticlesOnDatabaseVar);
  const hightlightIndex = useReactiveVar(currentIndexVar);
  const customNode = createCustomNode(selected, hightlightIndex);
  const isDark = useReactiveVar(isDarkVar);

  return (
    <>
      <ResponsiveScatterPlot
        data={plotData.data}
        margin={{ top: 40, right: 40, bottom: 100, left: 100 }}
        xScale={{
          type: 'linear',
          min: plotData.range.xMin,
          max: plotData.range.xMax,
        }}
        yScale={{
          type: 'linear',
          min: plotData.range.yMin,
          max: plotData.range.yMax,
        }}
        axisBottom={{
          legend: `PC1: ${Math.round(plotData.prl[0] * 10000) / 100}%`,
          legendPosition: 'middle',
          legendOffset: 50,
        }}
        axisLeft={{
          legend: `PC2: ${Math.round(plotData.prl[1] * 10000) / 100}%`,
          legendPosition: 'middle',
          legendOffset: -50,
        }}
        nodeSize={(node: Node) => {
          return node.id === hovered ? 15 : 9;
        }}
        colors={{ scheme: 'set2' }}
        onMouseMove={(node: Node) => setHovered(node.id)}
        onMouseLeave={() => setHovered(null)}
        onClick={(node: Node) => {
          const newId = (node.data as any).articleId;
          const newArray = xor(selectedArticlesOnDatabaseVar(), [newId]);
          selectedArticlesOnDatabaseVar(newArray);
          currentIndexVar(
            Math.max(
              newArray.findIndex((item) => item === newId),
              0
            )
          );
        }}
        tooltip={({ node }) => (
          <div>
            <PlotTooltip {...node} />
          </div>
        )}
        theme={{
          textColor: isDark ? '#DDDDDD' : '#333333',
        }}
        renderNode={customNode}
      />
    </>
  );
};
