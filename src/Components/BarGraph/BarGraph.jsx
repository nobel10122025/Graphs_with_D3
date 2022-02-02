import React , {useState , useEffect} from 'react';
import {max, min, scaleLinear, scaleTime} from 'd3';

import Marks from './Marks';
import AxisBottom from './AxisBottom';
import AxisLeft from './AxisLeft';

import './BarGraph.css'

const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
const width = 1240;
const height = 600;
const margin = {top : 20 , left : 20, right : 20 , bottom : 20}
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom
const barWidth = width / 275

function BarGraph() {
    const [data , setData] = useState([]);

    const getData = async () => {
      const response= await fetch(url)
      const dataReceived = await response.json()
      setData(dataReceived.data)
    //   console.log(data)
    }
    
    useEffect(()=>{
        getData();
    },[])

    const dateConversion = (date) => {
        var parts =date.split('-');
        var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
        // console.log(xScale(mydate));
        return mydate
    }
    
    const yScale = scaleLinear()
        .domain([0,max(data,d => d[1])])
        .range([0, innerHeight])

    const xScale = scaleTime()
    .domain([min(data, d => dateConversion(d[0])), max(data, d => dateConversion(d[0]))])
    .range([0, innerWidth])

    if(!data){
        return <div>Loading...</div>
    }
    return( 
    <>
    <h1 >United States GDP</h1>
    <div>X axis: <strong>Time</strong> (in Year) <br/> Y axis: <strong>Gross Domestic Product</strong> (in Billions)</div>
    <svg height={height} width={width}>
        <g transform={`translate(${0},${0})`}>
        <Marks 
            xScale={xScale}
            yScale={yScale}
            innerHeight={innerHeight}
            barWidth={barWidth}
            dateConversion={dateConversion}
            data={data}
        />
        <AxisBottom
            innerHeight={innerHeight}
            innerWidth={innerWidth}
            xScale={xScale}
        />
        <AxisLeft 
            innerHeight={innerHeight}
            yScale={yScale}
        />
        </g>
    </svg>
    </>
    )
}

export default BarGraph;
