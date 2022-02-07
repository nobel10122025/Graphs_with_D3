import {Routes, Route } from "react-router-dom";
import './App.css';
import BarGraph from './Components/BarGraph/BarGraph';
import ScatterPlot from './Components/ScatterPlot/ScatterPlot';
import LineGraph from "./Components/LineGraph/LineGraph";
import HomePage from "./Components/HomePage/HomePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="barGraph" element={<BarGraph />} />
        <Route path="scatterPlot" element={<ScatterPlot />} />
        <Route path="lineGraph" element={<LineGraph />} />
      </Routes>
    </>
  );
}

export default App;
