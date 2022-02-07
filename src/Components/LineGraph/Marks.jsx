import React from 'react';
import { line , curveNatural } from 'd3';

function Marks({xValue , yValue , xScale , yScale , data}) {
   
    return (
        <>
        <g className='marks'>
            <path 
                fill='none' 
                stroke='black'
                d={line()
                    .x(d => xScale(xValue(d)))
                    .y(d => yScale(yValue(d)))
                    .curve(curveNatural)(data.hourly)}
            />
        </g>
        {   data.hourly.map((d,i) => (
            <g transform={`translate(${0},${0})`} key={i} className="line-graph">
                <circle 
                    cx={xScale(xValue(d))} 
                    cy={yScale(yValue(d))} 
                    r={4.5}/>
            </g>))
        }
    </>)
}

export default Marks;
