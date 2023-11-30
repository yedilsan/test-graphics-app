import { useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import "./radar.css";

const WheelofLife = () => {
  const [chart, setChart] = useState(null); // State to hold the chart instance
  const [data, setData] = useState([
    // Initial data
    {
      category: "Health",
      value: 0,
      columnSettings: {
        fill: null, // You may set an initial color if needed
      },
    },
    {
      category: "Career",
      value: 0,
      columnSettings: {
        fill: null,
      },
    },
    {
      category: "Love",
      value: 0,
      columnSettings: {
        fill: null,
      },
    },
    {
      category: "Spirituality",
      value: 0,
      columnSettings: {
        fill: null,
      },
    },
    {
      category: "Family",
      value: 0,
      columnSettings: {
        fill: null,
      },
    },
    {
      category: "Money",
      value: 0,
      columnSettings: {
        fill: null,
      },
    },
    {
      category: "Fun",
      value: 0,
      columnSettings: {
        fill: null,
      },
    },
    {
      category: "Friends",
      value: 0,
      columnSettings: {
        fill: null,
      },
    },
  ]);

  useEffect(() => {
    /* Chart code */
    // Create root element
    let root = am5.Root.new("WheelofLife");
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let radarChart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );

    // Create axes and their renderers
    let xRenderer = am5radar.AxisRendererCircular.new(root, {});
    xRenderer.labels.template.setAll({
      radius: 10,
    });

    let xAxis = radarChart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = radarChart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 10,
        renderer: am5radar.AxisRendererRadial.new(root, {
          minGridDistance: 20,
        }),
      })
    );

    yAxis.get("renderer").labels.template.set("forceHidden", true);

    // Create series
    let series = radarChart.series.push(
      am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
      })
    );

    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY}",
      templateField: "columnSettings",
      strokeOpacity: 0,
      width: am5.p100,
    });

    // Set data
    series.data.setAll(data);
    xAxis.data.setAll(data);

    // Animate chart
    series.appear(1000);
    radarChart.appear(1000, 100);

    // Set the chart instance in the state
    setChart(radarChart);

    // Cleanup on unmount
    return () => {
      root.dispose();
    };
  }, []); // Run this effect only once on mount

  // Function for updating value
  const setValue = (index, value) => {
    if (chart) {
      let updatedData = [...data]; // Create a copy of the data array
      let row = updatedData[index];
      row.value = value;
      console.log(row);
      chart.series.getIndex(0).data.setIndex(index, {
        category: row.category,
        value: value,
        columnSettings: row.columnSettings,
      });

      // Reveal next question
      let areas = document.getElementsByClassName("area");
      for (var i = 0; i < areas.length; i++) {
        areas[i].style.display = index + 1 === i ? "block" : "none";
      }

      // Update the state with the modified data
      setData(updatedData);
    }
  };

  return (
    <div>
      <div className="areas">
        <div className="area">
          <h3>Health</h3>
          <div className="values">
            <div className="value" onClick={() => setValue(0, 1)}>
              1
            </div>
            <div className="value" onClick={() => setValue(0, 2)}>
              2
            </div>
            <div className="value" onClick={() => setValue(0, 3)}>
              3
            </div>
            <div className="value" onClick={() => setValue(0, 4)}>
              4
            </div>
            <div className="value" onClick={() => setValue(0, 5)}>
              5
            </div>
            <div className="value" onClick={() => setValue(0, 6)}>
              6
            </div>
            <div className="value" onClick={() => setValue(0, 7)}>
              7
            </div>
            <div className="value" onClick={() => setValue(0, 8)}>
              8
            </div>
            <div className="value" onClick={() => setValue(0, 9)}>
              9
            </div>
            <div className="value" onClick={() => setValue(0, 10)}>
              10
            </div>
          </div>
        </div>
        <div className="area" style={{ display: "none" }}>
          <h3>Career</h3>
          <div className="values">
            <div className="value" onClick={() => setValue(0, 1)}>
              1
            </div>
            <div className="value" onClick={() => setValue(0, 2)}>
              2
            </div>
            <div className="value" onClick={() => setValue(0, 3)}>
              3
            </div>
            <div className="value" onClick={() => setValue(0, 4)}>
              4
            </div>
            <div className="value" onClick={() => setValue(0, 5)}>
              5
            </div>
            <div className="value" onClick={() => setValue(0, 6)}>
              6
            </div>
            <div className="value" onClick={() => setValue(0, 7)}>
              7
            </div>
            <div className="value" onClick={() => setValue(0, 8)}>
              8
            </div>
            <div className="value" onClick={() => setValue(0, 9)}>
              9
            </div>
            <div className="value" onClick={() => setValue(0, 10)}>
              10
            </div>
          </div>
        </div>
        <div className="area" style={{ display: "none" }}>
          <h3>Love</h3>
          <div className="values">
            <div className="value" onClick={() => setValue(0, 1)}>
              1
            </div>
            <div className="value" onClick={() => setValue(0, 2)}>
              2
            </div>
            <div className="value" onClick={() => setValue(0, 3)}>
              3
            </div>
            <div className="value" onClick={() => setValue(0, 4)}>
              4
            </div>
            <div className="value" onClick={() => setValue(0, 5)}>
              5
            </div>
            <div className="value" onClick={() => setValue(0, 6)}>
              6
            </div>
            <div className="value" onClick={() => setValue(0, 7)}>
              7
            </div>
            <div className="value" onClick={() => setValue(0, 8)}>
              8
            </div>
            <div className="value" onClick={() => setValue(0, 9)}>
              9
            </div>
            <div className="value" onClick={() => setValue(0, 10)}>
              10
            </div>
          </div>
        </div>
        <div className="area" style={{ display: "none" }}>
          <h3>Spirituality</h3>
          <div className="values">
            <div className="value" onClick={() => setValue(0, 1)}>
              1
            </div>
            <div className="value" onClick={() => setValue(0, 2)}>
              2
            </div>
            <div className="value" onClick={() => setValue(0, 3)}>
              3
            </div>
            <div className="value" onClick={() => setValue(0, 4)}>
              4
            </div>
            <div className="value" onClick={() => setValue(0, 5)}>
              5
            </div>
            <div className="value" onClick={() => setValue(0, 6)}>
              6
            </div>
            <div className="value" onClick={() => setValue(0, 7)}>
              7
            </div>
            <div className="value" onClick={() => setValue(0, 8)}>
              8
            </div>
            <div className="value" onClick={() => setValue(0, 9)}>
              9
            </div>
            <div className="value" onClick={() => setValue(0, 10)}>
              10
            </div>
          </div>
        </div>
        <div className="area" style={{ display: "none" }}>
          <h3>Family</h3>
          <div className="values">
            <div className="value" onClick={() => setValue(0, 1)}>
              1
            </div>
            <div className="value" onClick={() => setValue(0, 2)}>
              2
            </div>
            <div className="value" onClick={() => setValue(0, 3)}>
              3
            </div>
            <div className="value" onClick={() => setValue(0, 4)}>
              4
            </div>
            <div className="value" onClick={() => setValue(0, 5)}>
              5
            </div>
            <div className="value" onClick={() => setValue(0, 6)}>
              6
            </div>
            <div className="value" onClick={() => setValue(0, 7)}>
              7
            </div>
            <div className="value" onClick={() => setValue(0, 8)}>
              8
            </div>
            <div className="value" onClick={() => setValue(0, 9)}>
              9
            </div>
            <div className="value" onClick={() => setValue(0, 10)}>
              10
            </div>
          </div>
        </div>
        <div className="area" style={{ display: "none" }}>
          <h3>Money</h3>
          <div className="values">
            <div className="value" onClick={() => setValue(0, 1)}>
              1
            </div>
            <div className="value" onClick={() => setValue(0, 2)}>
              2
            </div>
            <div className="value" onClick={() => setValue(0, 3)}>
              3
            </div>
            <div className="value" onClick={() => setValue(0, 4)}>
              4
            </div>
            <div className="value" onClick={() => setValue(0, 5)}>
              5
            </div>
            <div className="value" onClick={() => setValue(0, 6)}>
              6
            </div>
            <div className="value" onClick={() => setValue(0, 7)}>
              7
            </div>
            <div className="value" onClick={() => setValue(0, 8)}>
              8
            </div>
            <div className="value" onClick={() => setValue(0, 9)}>
              9
            </div>
            <div className="value" onClick={() => setValue(0, 10)}>
              10
            </div>
          </div>
        </div>
        <div className="area" style={{ display: "none" }}>
          <h3>Fun</h3>
          <div className="values">
            <div className="value" onClick={() => setValue(0, 1)}>
              1
            </div>
            <div className="value" onClick={() => setValue(0, 2)}>
              2
            </div>
            <div className="value" onClick={() => setValue(0, 3)}>
              3
            </div>
            <div className="value" onClick={() => setValue(0, 4)}>
              4
            </div>
            <div className="value" onClick={() => setValue(0, 5)}>
              5
            </div>
            <div className="value" onClick={() => setValue(0, 6)}>
              6
            </div>
            <div className="value" onClick={() => setValue(0, 7)}>
              7
            </div>
            <div className="value" onClick={() => setValue(0, 8)}>
              8
            </div>
            <div className="value" onClick={() => setValue(0, 9)}>
              9
            </div>
            <div className="value" onClick={() => setValue(0, 10)}>
              10
            </div>
          </div>
        </div>
        <div className="area" style={{ display: "none" }}>
          <h3>Friends</h3>
          <div className="values">
            <div className="value" onClick={() => setValue(0, 1)}>
              1
            </div>
            <div className="value" onClick={() => setValue(0, 2)}>
              2
            </div>
            <div className="value" onClick={() => setValue(0, 3)}>
              3
            </div>
            <div className="value" onClick={() => setValue(0, 4)}>
              4
            </div>
            <div className="value" onClick={() => setValue(0, 5)}>
              5
            </div>
            <div className="value" onClick={() => setValue(0, 6)}>
              6
            </div>
            <div className="value" onClick={() => setValue(0, 7)}>
              7
            </div>
            <div className="value" onClick={() => setValue(0, 8)}>
              8
            </div>
            <div className="value" onClick={() => setValue(0, 9)}>
              9
            </div>
            <div className="value" onClick={() => setValue(0, 10)}>
              10
            </div>
          </div>
        </div>

        <div className="area" style={{ display: "none" }}>
          <h3>All done!</h3>
        </div>
      </div>
      <div id="WheelofLife" className="chart"></div>
    </div>
  );
};

export default WheelofLife;
