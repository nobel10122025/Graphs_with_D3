import React from 'react';

function AxisBottom({xScale , innerHeight , innerWidth}) {
  return (
  <>
  <line x2={innerWidth} stroke='black'/>
        {
            xScale.ticks().map((tickValue , index) => (
                <g transform={`translate(${xScale(tickValue)},${innerHeight +15})`} key={index}>
                    <text textAnchor='middle'>
                       {tickValue.getFullYear()}
                    </text>
                </g>
            ))
        }
  </>);
}

export default AxisBottom;
