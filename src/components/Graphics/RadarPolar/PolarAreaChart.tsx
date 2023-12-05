import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";

const PolarAreaChart = () => {
  useEffect(() => {
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("PolarAreaChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Generate and set data
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
    let cat = -1;
    let value = 10;

    function generateData() {
      value = Math.round(Math.random() * 10);
      cat++;
      return {
        category: "cat" + cat,
        value: value,
      };
    }

    function generateDatas(count: number) {
      cat = -1;
      let data = [] as { category: string; value: number }[];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    let chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
    let cursor = chart.set(
      "cursor",
      am5radar.RadarCursor.new(root, {
        behavior: "zoomX",
      })
    );

    cursor.lineY.set("visible", false);

    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    let xRenderer = am5radar.AxisRendererCircular.new(root, {});
    xRenderer.labels.template.setAll({
      radius: 10,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5radar.AxisRendererRadial.new(root, {}),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    for (var i = 0; i < 5; i++) {
      let series = chart.series.push(
        am5radar.RadarColumnSeries.new(root, {
          stacked: true,
          name: "Series " + i,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          categoryXField: "category",
        })
      );

      series.set("stroke", root.interfaceColors.get("background"));
      series.columns.template.setAll({
        width: am5.p100,
        strokeOpacity: 0.1,
        tooltipText: "{name}: {valueY}",
      });

      series.data.setAll(generateDatas(12));
      series.appear(1000);
    }

    // Add scrollbars
    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, { orientation: "horizontal", exportable: false })
    );
    chart.set(
      "scrollbarY",
      am5.Scrollbar.new(root, { orientation: "vertical", exportable: false })
    );

    let data = generateDatas(12);
    xAxis.data.setAll(data);

    // Animate chart
    // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
    chart.appear(1000, 100);

    // Cleanup on unmount
    return () => {
      root.dispose();
    };
  }, []); // Run this effect only once on mount

  return <div id="PolarAreaChart" className="chart"></div>;
};

export default PolarAreaChart;
