import React from 'react';
import {format} from 'd3';

function AxisLeft({innerHeight , yScale}) {
  return (
  <>
    <line y2={innerHeight} stroke='black'/>
    {
        yScale.ticks().map((tickValue , index) => (
            <g transform={`translate(2,${innerHeight-yScale(tickValue) + 15})`} key={index}>
                <text textAnchor='start'>
                    {format(",.2r")(tickValue)}
                </text>
            </g>
        ))
    }
  </>);
}

export default AxisLeft;
