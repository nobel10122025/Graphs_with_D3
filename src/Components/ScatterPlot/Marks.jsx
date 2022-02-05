import React from 'react';

function Marks({
  xScale , 
  yScale , 
  innerHeight , 
  data ,
  xValue,
  yValue
}) {
 
  return (
  <>
    {
      data.map((d,index) => 
          <circle
              cx={xScale(xValue(d))}
              cy={yScale(yValue(d))} 
              r={7}
              key={index}
          />     
      )
    }   
  </>);
}

export default Marks;
