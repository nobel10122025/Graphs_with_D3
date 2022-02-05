import React from 'react';
import {scaleLinear , min , max } from 'd3';

import Marks from './Marks';
import AxisBottom from './AxisBottom';
import AxisLeft from './AxisLeft';
import { useData } from './useData';

import './ScatterPlot.css'

const width = 1240 - 60;
const height = 600 - 120;
const margin = {top : 20 , left : 80, right : 80 , bottom : 40}
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

function ScatterPlot() {
    
    const data = useData();
    console.log(data)

    const xValue = data => data['sepal.length']
    const yValue = data => data['petal.length']

    if(!data){
        return <div>Loading</div>
    }
    const yScale = scaleLinear()
        .domain([min(data , yValue),max(data ,yValue)])  
        .range([innerHeight,0])
        .nice()

    const xScale = scaleLinear()
        .domain([min(data , xValue),max(data , xValue)])
        .range([0, innerWidth])
        .nice()

    if(!data){
        return <div>Loading...</div>
    }
    return( 
    <>
        <svg height={height} width={width}>
            <g transform={`translate(${100},${0})`}>
            <Marks 
                xScale={xScale}
                yScale={yScale}
                innerHeight={innerHeight}
                data={data}
                xValue={xValue}
                yValue={yValue}
            />
            <text 
            x={innerWidth / 2}
            y={ innerHeight + 45 }
            className='axis-label'
            >
                sepal length
            </text>
            <text 
            transform={`translate(${-40},${height /2}) rotate(-90)`}
            className='axis-label'
            >petal length</text>
            <AxisBottom
                innerHeight={innerHeight}
                innerWidth={innerWidth}
                xScale={xScale}
            />
            <AxisLeft 
                innerWidth={innerWidth}
                innerHeight={innerHeight}
                yScale={yScale}
            />
            </g>
        </svg>
    </>
    )
}

export default ScatterPlot;
