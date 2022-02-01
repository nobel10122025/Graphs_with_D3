import React from 'react';

function Marks({xScale , yScale , barWidth, innerHeight , dateConversion,data}) {
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
            />            
        )
    }   
  </>);
}

export default Marks;
