import { scaleLinear, scaleTime , min , max ,timeFormat} from 'd3';
import React, { useState , useEffect } from 'react';

import Marks from './Marks';
import AxisBottom from './AxisBottom';
import AxisLeft from './AxisLeft';
import SearchBar from './SearchBar';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './LineGraph.css'

const width = 1240 - 120;
const height = 600 - 120;
const margin = {top : 20 , left : 40, right : 40 , bottom : 40}
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const APIkey = "c20892d228d168e22a8fbeb713c0f6c1"; 

function LineGraph() {
  const [city , setCity] = useState("chennai")
  // const data = useData(APIkey , city);
  const [latAndLon , setLatAndLon] = useState([51.5098 , -0.1180])
  const [data , setData] = useState(null)
  const [toggle , setToggle] =useState(false)

  const Weatherurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latAndLon[0]}&lon=${latAndLon[1]}&exclude=minutely,daily&appid=${APIkey}&units=metric`;
  
  const url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        const lat = data[0].lat;
        const lon= data[0].lon;
        setLatAndLon ([lat , lon]);
        const weatherResponse  = await fetch(Weatherurl)
        const weatherData = await weatherResponse.json()
        setData(weatherData) 
        setToggle(true)
    }
    useEffect(()=>{
        getData();
    },[toggle])

  if(!data){
    return <div>Loading...</div>
  }

  const xValue = value => value.dt
  const yValue = value => value.temp

  const xScale = scaleTime()
      .domain([min(data.hourly , xValue), max(data.hourly , xValue)])
      .range([0 , innerWidth])
      .nice()
  
  const yScale = scaleLinear()
    .domain([min(data.hourly , yValue), max(data.hourly , yValue)])
    .range([innerHeight , 0])
    .nice()

  const xAxisTimeFormat = timeFormat("%H:%M:%S");
  // console.log(city)
  return (
    <ErrorBoundary>
    <div>
      <h3>Temparature Graph</h3>
      <SearchBar 
        handleChange={(e)=>(setCity(e.target.value))}
        handleSubmit={() => setToggle(false)}
        value={city}
      />
      <svg height={height} width={width}>
        <g transform={`translate(${60},${10})`}>
          <Marks 
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
          />
          <AxisBottom 
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTimeFormat}
          />
          <AxisLeft 
            yScale={yScale}
            innerWidth={innerWidth}
          />
          <text 
            x={innerWidth / 2}
            y={ innerHeight + 45 }
            className='axis-label'
          >
              Time(HH:MM:SS)
          </text>
          <text 
              transform={`translate(${-40},${height /2}) rotate(-90)`}
              className='axis-label'
          >
              temparature (in Celsius)
          </text>
        </g>
      </svg>
    </div>
    </ErrorBoundary>
  )
}

export default LineGraph;
