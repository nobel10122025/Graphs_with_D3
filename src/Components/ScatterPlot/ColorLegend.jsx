import React from 'react';

function ColorLegend({colorScale , innerWidth , onHover , hoverValue}) {
    return colorScale.domain().map( (data , index) => (         
    <g transform={`translate(${innerWidth + 15 },${(index + 2) * 25})`} 
        onMouseEnter={() => onHover(data)}
        onMouseOut={() =>onHover(null)}
        opacity = {hoverValue && hoverValue !== data ? 0.4 : 1}
        className="color-legend"
        >
            <circle fill={colorScale(data)} r={7}/>
            <text x ="10" dy="0.32em">{data}</text>
        </g>
    ) )
  
}

export default ColorLegend;
