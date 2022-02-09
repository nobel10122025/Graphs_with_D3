import React from 'react';

function AxisLeft({yScale , innerWidth}) {
   return yScale.ticks().map((temp , index) => (
        <g transform={`translate(${0},${yScale(temp)})`} key={index}>
            <line x2={innerWidth}/>
            <text
            style={{ textAnchor:'start' }}
            dy=".32em"
            x={-35}
            >{temp}</text>
        </g>
    ))
}

export default AxisLeft;
