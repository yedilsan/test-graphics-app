import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
const PieChartBrokenDownSlices = () => {
  useEffect(() => {
    /* Chart code */
    // Create root and chart
    let root = am5.Root.new("PieChartBrokenDownSlices");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "percent",
        categoryField: "type",
        fillField: "color",
        alignLabels: false,
      })
    );

    series.slices.template.set("templateField", "sliceSettings");
    series.labels.template.set("radius", 30);

    // Set up click events
    series.slices.template.events.on("click", function (event) {
      const dataContext = event.target.dataItem?.dataContext;
      if (isDataContextWithDataContext(dataContext)) {
        selected = dataContext.id;
      } else {
        selected = undefined;
      }
      series.data.setAll(generateChartData());
    });

    function isDataContextWithDataContext(obj: any): obj is { id: number } {
      return (
        obj && typeof obj === "object" && "id" in obj && obj.id !== undefined
      );
    }
    // Define data
    let selected: number | undefined;
    let types = [
      {
        type: "Fossil Energy",
        percent: 70,
        color: series.get("colors")?.getIndex(0),
        subs: [
          {
            type: "Oil",
            percent: 15,
          },
          {
            type: "Coal",
            percent: 35,
          },
          {
            type: "Nuclear",
            percent: 20,
          },
        ],
      },
      {
        type: "Green Energy",
        percent: 30,
        color: series.get("colors")?.getIndex(1),
        subs: [
          {
            type: "Hydro",
            percent: 15,
          },
          {
            type: "Wind",
            percent: 10,
          },
          {
            type: "Other",
            percent: 5,
          },
        ],
      },
    ];
    series.data.setAll(generateChartData());

    function generateChartData() {
      let chartData = [];
      for (var i = 0; i < types.length; i++) {
        if (i == selected) {
          for (var x = 0; x < types[i].subs.length; x++) {
            chartData.push({
              type: types[i].subs[x].type,
              percent: types[i].subs[x].percent,
              color: types[i].color,
              pulled: true,
              sliceSettings: {
                active: true,
              },
            });
          }
        } else {
          chartData.push({
            type: types[i].type,
            percent: types[i].percent,
            color: types[i].color,
            id: i,
          });
        }
      }
      return chartData;
    }

    // Cleanup on unmount
    return () => {
      root.dispose();
    };
  }, []); // Run this effect only once on mount

  return <div id="PieChartBrokenDownSlices" className="chart"></div>;
};

export default PieChartBrokenDownSlices;
