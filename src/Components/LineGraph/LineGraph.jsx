import { scaleLinear, scaleTime , min , max ,timeFormat} from 'd3';
import React from 'react';

import { useData } from './useData';
import Marks from './Marks';
import AxisBottom from './AxisBottom';
import AxisLeft from './AxisLeft';

import './LineGraph.css'

const width = 1240 - 60;
const height = 600 - 120;
const margin = {top : 20 , left : 40, right : 20 , bottom : 20}
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom


function LineGraph() {
  const data = useData();
  // console.log(data)

  if(!data){
    return <div>Loading...</div>
  }

  const xValue = value => value.dt
  const yValue = value => value.temp

  const xScale = scaleTime()
      .domain([min(data.hourly , xValue), max(data.hourly , xValue)])
      .range([0 , innerWidth])
      .nice()
  
  const yScale = scaleLinear()
    .domain([min(data.hourly , yValue), max(data.hourly , yValue)])
    .range([innerHeight , 0])
    .nice()

  const xAxisTimeFormat = timeFormat("%M:%S");

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${0},${0})`}>
        <Marks 
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
        <AxisBottom 
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTimeFormat}
        />
        <AxisLeft 
          yScale={yScale}
          innerWidth={innerWidth}
        />
      </g>
    </svg>
  )
}

export default LineGraph;
