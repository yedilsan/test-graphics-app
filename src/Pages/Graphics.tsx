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
import Filter from "../components/Filter";
import { Spin, Col, Row } from "antd";
import { useState, useEffect } from "react";

const Graphics = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    const delay = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup the timeout in case the component unmounts before the delay
    return () => clearTimeout(delay);
  }, []);
  return (
    <DefaultLayout>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: "15px",
            }}
          >
            <Filter />
          </div>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "40px",
              color: "#67B7DC",
            }}
          >
            Graphics
          </h1>
          <Row className="charts">
            <Col className="chart_layout">
              <RotatedLabels />
            </Col>
            <Col className="chart_layout">
              <ClusteredColumnChart />
            </Col>
            <Col className="chart_layout">
              <ClusteredBarChart />
            </Col>

            <Col className="chart_layout">
              <LineGraph />
            </Col>
            <Col className="chart_layout">
              <ControlChart />
            </Col>
            <Col className="chart_layout">
              <LiveData />
            </Col>

            <Col className="chart_layout">
              <PieChart />
            </Col>
            <Col className="chart_layout">
              <DonutChart />
            </Col>
            <Col className="chart_layout">
              <PieChartBrokenDownSlices />
            </Col>

            <Col className="chart_layout">
              <ZoomableBubbleChart />
            </Col>
            <Col className="chart_layout chart_map">
              <WorldMapClusteredPoints />
            </Col>

            <Col className="chart_layout">
              <ZoomableRadar />
            </Col>
            <Col className="chart_layout">
              <PolarAreaChart />
            </Col>
            <Col className="chart_layout">
              <FlowerChart />
            </Col>
          </Row>
        </>
      )}
    </DefaultLayout>
  );
};

export default Graphics;
