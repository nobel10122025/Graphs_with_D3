import React from 'react';

function AxisBottom({xScale , innerHeight , tickFormat}) {
    return  xScale.ticks().map((date ,index) => (
        <g transform={`translate (${xScale(date)},${0})`} key={index}>
            <line y2={innerHeight}/>
            <text style={{ textAnchor: 'end' }} dy=".71em" y={innerHeight}>
                {tickFormat(date)}
            </text>
        </g>
    ))
  
}

export default AxisBottom;
