import React , {useState} from 'react';
import {scaleLinear , min , max, scaleOrdinal } from 'd3';
import ReactDropdown from 'react-dropdown';

import Marks from './Marks';
import AxisBottom from './AxisBottom';
import AxisLeft from './AxisLeft';
import { useData } from './useData';
import ColorLegend from './ColorLegend';

import './ScatterPlot.css'
import 'react-dropdown/style.css';

const width = 1240 - 60;
const height = 600 - 120;
const margin = {top : 20 , left : 60, right : 180 , bottom : 40}
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const attributes = [
    { value: 'sepal.length', label: 'Sepal Length' },
    { value: 'sepal.width', label: 'Sepal Width' },
    { value: 'petal.length', label: 'Petal Length' },
    { value: 'petal.width', label: 'Petal Width' },
    { value: 'variety', label: 'Variety' }
  ];
  const getLabel = (value) => {
      for( let i =0 ;i< attributes.length ; i++)
      {
        if(value===attributes[i].value) return attributes[i].label
      }
  }

function ScatterPlot() {
    
    const data = useData();
    const [hoverValue , setHoverValue] = useState(null)

    const initialxAttribute = 'petal.length'
    const [xAttribute , setxAttribute] = useState(initialxAttribute)
    const xValue = data => data[xAttribute]
    const xAxisLabel = getLabel(xAttribute)

    const initialyAttribute = 'sepal.length'
    const [yAttribute , setyAttribute] = useState(initialyAttribute)
    const yValue = data => data[yAttribute]
    const yAxisLabel = getLabel(yAttribute)

    const colorValue = data => data['variety']


    if(!data){
        return <div>Loading</div>
    }

    const filteredData = data.filter((d) => colorValue(d)===hoverValue)

    const yScale = scaleLinear()
        .domain([min(data , yValue),max(data ,yValue)])  
        .range([innerHeight,0])
        .nice()

    const xScale = scaleLinear()
        .domain([min(data , xValue),max(data , xValue)])
        .range([0, innerWidth])
        .nice()

       
    const colorScale = scaleOrdinal()
        .domain(data.map(colorValue))
        .range(["#ff6361" ,"#ffa600" ,"#003f5c"])
    

    return( 
    <>
        <div className='menu-container'>
            <span className='menu-label'>X</span>
            <ReactDropdown
            options={attributes}
            value={xAttribute}
            onChange={({value}) => {setxAttribute(value)} }
            />
            <span className='menu-label'>Y</span>
            <ReactDropdown
            options={attributes}
            value={yAttribute}
            onChange={({value}) => setyAttribute(value)}
            />
        </div>
        <svg height={height} width={width}>
            <g transform={`translate(${100},${0})`}>
            <g opacity={hoverValue ? 0.4 : 1}>
                <Marks 
                    xScale={xScale}
                    yScale={yScale}
                    innerHeight={innerHeight}
                    data={data}
                    xValue={xValue}
                    yValue={yValue}
                    colorScale={colorScale}
                    colorValue={colorValue}
                />
            </g>
            <Marks 
                xScale={xScale}
                yScale={yScale}
                innerHeight={innerHeight}
                data={filteredData}
                xValue={xValue}
                yValue={yValue}
                colorScale={colorScale}
                colorValue={colorValue}
            />
            <text 
                x={innerWidth / 2}
                y={ innerHeight + 45 }
                className='axis-label'
            >
                {xAxisLabel}
            </text>

            <text 
                transform={`translate(${-40},${height /2}) rotate(-90)`}
                className='axis-label'
            >
                {yAxisLabel}
            </text>
            <text 
                transform={`translate(${innerWidth + 10},${30})`}
                className='axis-label'
            >
                Variety
            </text>
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
            <ColorLegend 
                colorScale={colorScale}
                innerWidth={innerWidth}
                onHover={setHoverValue}
                hoverValue ={hoverValue}
            /> 
            </g>
        </svg>
    </>
    )
}

export default ScatterPlot;
