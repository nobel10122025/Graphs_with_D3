import React from 'react';

function AxisBottom({xScale , innerHeight , innerWidth}) {
  return (
  <>
  <line 
    x2={innerWidth}
    y1={innerHeight}  
    y2 ={innerHeight}
    stroke='black'
    />
        {
            xScale.ticks().map((tickValue , index) => (
                <g transform={`translate(${xScale(tickValue)})`} key={index}>
                    <line y2={innerHeight} />
                    <text textAnchor='start' y={`${innerHeight + 20}`}>
                       {tickValue}
                    </text>
                </g>
            ))
        }
  </>);
}

export default AxisBottom;
