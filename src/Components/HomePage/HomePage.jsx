import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
  return( 
  <>
    <Link to="/BarGraph">BarGraph</Link>
    <Link to="/ScatterPlot">ScatterPlot</Link>
    <Link to="/LineGraph">Line Graph</Link>
    <div>Hello People</div>
  </>)
}

export default HomePage;
