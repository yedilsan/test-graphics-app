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
import QueryResult from "../components/QueryResult";
import AccidentCount from "../components/AccidentCount";

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
          <Row className="charts">
            <Col className="chart_layout" style={{ padding: "20px" }}>
              <QueryResult
                query={{
                  timeDimensions: [
                    {
                      dimension: "accident.occurred_at",
                      dateRange: "Last year",
                    },
                  ],
                  measures: ["accident.count"],
                }}
                render={(resultSet, error) => (
                  <AccidentCount
                    resultSet={resultSet}
                    error={error}
                    title="Общее количество ДТП"
                  />
                )}
              />

              <QueryResult
                query={{
                  limit: 5000,
                  measures: ["accident.count"],
                  order: {
                    "accident.count": "desc",
                  },
                  dimensions: ["accident.public_transport"],
                  filters: [
                    {
                      member: "accident.public_transport",
                      operator: "equals",
                      values: ["true"],
                    },
                  ],
                  timeDimensions: [
                    {
                      dimension: "accident.occurred_at",
                      dateRange: "Last year",
                    },
                  ],
                }}
                render={(resultSet, error) => (
                  <AccidentCount
                    resultSet={resultSet}
                    error={error}
                    title="С участием общ.транспорта"
                  />
                )}
              />

              <QueryResult
                query={{
                  measures: ["accident.count"],
                  dimensions: ["kind.name_ru"],
                  timeDimensions: [
                    {
                      dimension: "accident.occurred_at",
                      dateRange: "Last year",
                    },
                  ],
                  order: {
                    "kind.count": "desc",
                  },
                  filters: [
                    {
                      member: "kind.name_ru",
                      operator: "contains",
                      values: ["наезд на пешехода"],
                    },
                  ],
                }}
                render={(resultSet, error) => (
                  <AccidentCount
                    resultSet={resultSet}
                    error={error}
                    title="С участием пешехода"
                  />
                )}
              />
              <QueryResult
                query={{
                  dimensions: ["impairment.name_ru"],
                  order: {
                    "accident_impairment.count": "desc",
                  },
                  measures: ["accident_impairment.count"],
                  filters: [
                    {
                      member: "impairment.id",
                      operator: "equals",
                      values: [2],
                    },
                  ],
                }}
                render={(resultSet, error) => (
                  <AccidentCount
                    resultSet={resultSet}
                    error={error}
                    title="С алкогольным опьянением"
                  />
                )}
              />
            </Col>
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
            <Col className="chart_layout">
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
