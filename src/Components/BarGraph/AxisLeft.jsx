import React from 'react';

function AxisLeft({innerHeight , yScale}) {
  return (
  <>
    <line y2={innerHeight} stroke='black'/>   
    {
        yScale.ticks().map((tickValue , index) => (
            <g transform={`translate(5,${innerHeight-yScale(tickValue) + 15})`} key={index}>
                <text textAnchor='start'>
                    {tickValue}
                </text>
            </g>
        ))
    }
  </>);
}

export default AxisLeft;
