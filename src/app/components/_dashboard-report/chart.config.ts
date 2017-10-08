
import 'd3';
import 'nvd3';

declare let d3: any;

export const config = {
  multiBarHorizontalChart: {
    chart: {
      type: 'multiBarHorizontalChart',
      height: 455,
      x: function(d){return d.label;},
      y: function(d){return d.value;},
      showControls: true,
      showValues: true,
      duration: 500,
      xAxis: {
        showMaxMin: true
      },
      yAxis: {
        axisLabel: 'Values',
      }
    }
  },
  lineChart: {
    chart: {
      type: 'lineChart',
      height: 455,
      margin: {
        top: 20,
        right: 20,
        bottom: 40,
        left: 55
      },
      x: function(d) { return d.x; },
      y: function(d) { return d.y; },
      useInteractiveGuideline: true,
      xAxis: { axisLabel: 'Time (ms)' },
      yAxis: {
        axisLabel: 'Voltage (v)',
        axisLabelDistance: -10
      }
    }
  },
  multiBarChart: {
    chart: {
      type: 'multiBarChart',
      height: 450,
      margin: {
        top: 20,
        right: 20,
        bottom: 45,
        left: 45
      },
      clipEdge: false,
      //staggerLabels: true,
      duration: 500,
      stacked: false,
      xAxis: {
        axisLabel: 'Time (ms)',
        showMaxMin: false,
        tickFormat: function(d) {
          return d3.format(',f')(d);
        }
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: -20,
        tickFormat: function(d) {
          return d3.format(',.1f')(d);
        }
      }
    }
  },
  pieChart: {
    chart: {
      type: 'pieChart',
      height: 450,
      donut: true,
      x: function(d) { return d.key; },
      y: function(d) { return d.y; },
      showLabels: true,
      duration: 500,
      legend: {
        margin: {
          top: 10,
          bottom: 5,
          left: 0
        }
      }
    }
  }
}
