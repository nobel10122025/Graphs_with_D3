import React from 'react';
import {format} from 'd3';

function Marks({xScale , yScale , barWidth, innerHeight , dateConversion,data}) {
 
 const monthConversion = (value) => {
    const formatedDate = dateConversion(value)
    const Month = formatedDate.getMonth()
    if(Month===0) return "Q1"
    else if (Month===3) return "Q2"
    else if (Month===9) return "Q3"
    else return "Q4"
 }
 
  return (
  <>
    {
        data.map((d,index) => 
            <rect
                x={xScale(dateConversion(d[0]))}
                y={innerHeight-yScale(d[1])} 
                height={yScale(d[1])}
                width={barWidth}
                key={index}
            >
              <title fill="blue">
                {`${format(",.1f")(d[1])}B ${dateConversion(d[0]).getFullYear()} ${monthConversion(d[0])}`}
              </title>
            </rect>            
        )
    }   
  </>);
}

export default Marks;
