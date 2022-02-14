import React from 'react';
import { Link } from "react-router-dom";
import bar_graph from '../../Assets/bar_graph.jpg'
import line__graph from '../../Assets/line__graph.jpg'
import scatter_plot from '../../Assets/scatter_plot.jpg'

import './HomePage.css'

function HomePage() {
  return( 
    <div className='homePage'>
      <h1>Graphs with D3</h1>
      <div className='graph-container'>
        <Link to="/BarGraph">
          <div style={{backgroundImage:`url(${bar_graph})`}} className="graph"></div>
          <h3>Bar Graph</h3>
        </Link>
        <Link to="/ScatterPlot">
          <div style={{backgroundImage:`url(${scatter_plot})`}} className="graph"></div>
          <h3>Scatter Plot</h3>
        </Link>
        <Link to="/LineGraph">
          <div style={{backgroundImage:`url(${line__graph})`}} className="graph"></div>
          <h3>Line Graph</h3>
        </Link>
      </div>
    </div>)
}

export default HomePage;
