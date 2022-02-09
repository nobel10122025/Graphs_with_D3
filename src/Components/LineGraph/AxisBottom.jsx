import React from 'react';

function AxisBottom({xScale , innerHeight , tickFormat}) {
    return  xScale.ticks().map((date ,index) => (
        <g transform={`translate (${xScale(date)},${0})`} key={index}>
            <line y2={innerHeight}/>
            <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + 10}>
                {tickFormat(date)}
            </text>
        </g>
    ))
  
}

export default AxisBottom;
