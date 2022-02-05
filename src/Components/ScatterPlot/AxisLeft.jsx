import React from 'react';
import {format} from 'd3';

function AxisLeft({innerHeight , yScale , innerWidth}) {
  return (
  <>
    <line y2={innerHeight} stroke='black'/>   
    {
        yScale.ticks().map((tickValue , index) => (
            <g transform={`translate(0,${yScale(tickValue)})`} key={index}>
                <text textAnchor='start' x={-25}>
                    {format(",.2r")(tickValue)}
                </text>
                <line x2={innerWidth} />
            </g>
        ))
    }
  </>);
}

export default AxisLeft;
