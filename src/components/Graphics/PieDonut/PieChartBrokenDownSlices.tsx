import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const ZoomableBubbleChart = () => {
  useEffect(() => {
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("ZoomableBubbleChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelY: "zoomXY",
        pinchZoomX: true,
        pinchZoomY: true,
      })
    );

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.children.moveValue(
      am5.Label.new(root, {
        text: "GDP per Capita, USD",
        x: am5.p50,
        centerX: am5.p50,
      }),
      xAxis.children.length - 1
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: false,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    yAxis.children.moveValue(
      am5.Label.new(root, {
        rotation: -90,
        text: "Life expectancy, years",
        y: am5.p50,
        centerX: am5.p50,
      }),
      0
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        calculateAggregates: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "y",
        valueXField: "x",
        valueField: "value",
        seriesTooltipTarget: "bullet",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText:
            "[bold]{title}[/]\nLife expectancy: {valueY.formatNumber('#.0')}\nGDP: {valueX.formatNumber('#,###.')}\nPopulation: {value.formatNumber('#,###.')}",
        }),
      })
    );

    series.strokes.template.set("visible", false);

    // Add bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    let circleTemplate = am5.Template.new({});
    circleTemplate.adapters.add("fill", function (fill, target) {
      let dataItem = target.dataItem;
      if (dataItem) {
        return am5.Color.fromString(dataItem.dataContext.color);
      }
      return fill;
    });
    series.bullets.push(() => {
      let bulletCircle = am5.Circle.new(
        root,
        {
          radius: 5,
          fill: series.get("fill"),
          fillOpacity: 0.8,
        },
        circleTemplate
      );
      return am5.Bullet.new(root, {
        sprite: bulletCircle,
      });
    });

    // Add heat rule
    // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
    series.set("heatRules", [
      {
        target: circleTemplate,
        min: 3,
        max: 60,
        dataField: "value",
        key: "radius",
      },
    ]);

    // Set data
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Setting_data
    series.data.setAll([
      {
        title: "Afghanistan",
        id: "AF",
        color: "#eea638",
        continent: "asia",
        x: 1349.69694102398,
        y: 60.524,
        value: 33397058,
      },
      {
        title: "Albania",
        id: "AL",
        color: "#d8854f",
        continent: "europe",
        x: 6969.30628256456,
        y: 77.185,
        value: 3227373,
      },
      {
        title: "Algeria",
        id: "DZ",
        color: "#de4c4f",
        continent: "africa",
        x: 6419.12782939372,
        y: 70.874,
        value: 36485828,
      },
      {
        title: "Angola",
        id: "AO",
        color: "#de4c4f",
        continent: "africa",
        x: 5838.15537582502,
        y: 51.498,
        value: 20162517,
      },
      {
        title: "Argentina",
        id: "AR",
        color: "#86a965",
        continent: "south_america",
        x: 15714.1031814398,
        y: 76.128,
        value: 41118986,
      },
      {
        title: "Armenia",
        id: "AM",
        color: "#d8854f",
        continent: "europe",
        x: 5059.0879636443,
        y: 74.469,
        value: 3108972,
      },
      {
        title: "Australia",
        id: "AU",
        color: "#8aabb0",
        continent: "australia",
        x: 36064.7372768548,
        y: 82.364,
        value: 22918688,
      },
      {
        title: "Austria",
        id: "AT",
        color: "#d8854f",
        continent: "europe",
        x: 36731.6287741081,
        y: 80.965,
        value: 8428915,
      },
      {
        title: "Azerbaijan",
        id: "AZ",
        color: "#d8854f",
        continent: "europe",
        x: 9291.02626998762,
        y: 70.686,
        value: 9421233,
      },
      {
        title: "Bahrain",
        id: "BH",
        color: "#eea638",
        continent: "asia",
        x: 24472.896235865,
        y: 76.474,
        value: 1359485,
      },
      {
        title: "Bangladesh",
        id: "BD",
        color: "#eea638",
        continent: "asia",
        x: 1792.55023464123,
        y: 70.258,
        value: 152408774,
      },
    ]);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        snapToSeries: [series],
      })
    );

    // Add scrollbars
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, {
        orientation: "horizontal",
      })
    );

    chart.set(
      "scrollbarY",
      am5.Scrollbar.new(root, {
        orientation: "vertical",
      })
    );

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    // Cleanup on unmount
    return () => {
      root.dispose();
    };
  }, []); // Run this effect only once on mount

  return <div id="ZoomableBubbleChart" className="chart"></div>;
};

export default ZoomableBubbleChart;
