// eslint-disable-next-line no-unused-vars
import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import RotatedLabels from "../components/Graphics/ColumnBar/RotatedLabels";
import ClusteredColumnChart from "../components/Graphics/ColumnBar/ClusteredColumnChart";
import ClusteredBarChart from "../components/Graphics/ColumnBar/ClusteredBarChart";
import LineGraph from "../components/Graphics/LineArea/LineGraph";
import ControlChart from "../components/Graphics/LineArea/ControlChart";
import LiveData from "../components/Graphics/LineArea/LiveData";
import PieChart from "../components/Graphics/PieDonut/PieChart";
import DonutChart from "../components/Graphics/PieDonut/DonutChart";
import PieChartBrokenDownSlices from "../components/Graphics/PieDonut/PieChartBrokenDownSlices";
import ZoomableBubbleChart from "../components/Graphics/XYBubble/ZoomableBubbleChart";
import WorldMapClusteredPoints from "../components/Graphics/Maps/WorldMapClusteredPoints";
import ZoomableRadar from "../components/Graphics/RadarPolar/ZoomableRadar";
import PolarAreaChart from "../components/Graphics/RadarPolar/PolarAreaChart";
import FlowerChart from "../components/Graphics/RadarPolar/FlowerChart";
import "./graphics.css";

const Graphics = () => (
  <DefaultLayout>
    <h2 style={{ textAlign: "center" }}>Column & Bar</h2>
    <div className="charts">
      <RotatedLabels />
      <ClusteredColumnChart />
      <ClusteredBarChart />
    </div>
    <h2 style={{ textAlign: "center" }}>Line & Area</h2>
    <div className="charts">
      <LineGraph />
      <ControlChart />
      <LiveData />
    </div>
    <h2 style={{ textAlign: "center" }}>Pie & Donut</h2>
    <div className="charts">
      <PieChart />
      <DonutChart />
      <PieChartBrokenDownSlices />
    </div>
    <h2 style={{ textAlign: "center" }}>XY & Bubble</h2>
    <div className="charts">
      <ZoomableBubbleChart />
    </div>
    <h2 style={{ textAlign: "center" }}>Maps</h2>
    <div className="charts charts_map">
      <WorldMapClusteredPoints />
    </div>
    <h2 style={{ textAlign: "center" }}>Rader & Polar</h2>
    <div className="charts">
      <ZoomableRadar />
      <PolarAreaChart />
      <FlowerChart />
    </div>
  </DefaultLayout>
);

export default Graphics;
