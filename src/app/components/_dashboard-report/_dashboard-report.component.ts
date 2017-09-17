import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'd3';
import 'nvd3';

declare let d3: any;

@Component({
  selector: 'app-dashboard-report',
  templateUrl: './_dashboard-report.component.html',
  styleUrls: ['./_dashboard-report.component.scss']
})
export class DashboardReportComponent implements OnInit {

  private data;
  private data2;
  private data3;
  private options;
  private options2;
  private multiBarChart;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";
  private tempPieChartData;

  constructor(private http: Http) {
  }

  ngOnInit(): void {

    this.http.get("assets/data/table.json")
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 1000);
      });

    this.http.get("assets/data/bar.json")
      .subscribe((data) => {
        setTimeout(() => {
          this.data3 = data.json();
        }, 1000);
      });

    this.multiBarChart = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 45,
          left: 45
        },
        clipEdge: true,
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
    }

    this.options = {
      chart: {
        type: 'pieChart',
        height: 300,
        donut: true,
        x: function(d) { return d.key; },
        y: function(d) { return d.y; },
        showLabels: true,
        pie: {
          startAngle: function(d) { return d.startAngle / 2 - Math.PI / 2 },
          endAngle: function(d) { return d.endAngle / 2 - Math.PI / 2 }
        },
        duration: 500,
        legend: {
          margin: {
            top: 10,
            right: 140,
            bottom: 5,
            left: 0
          }
        }
      }
    }
    this.options2 = {
      chart: {
        type: 'pieChart',
        height: 300,
        donut: true,
        x: function(d) { return d.key; },
        y: function(d) { return d.y; },
        showLabels: true,
        duration: 500,
        legend: {
          margin: {
            top: 10,
            right: 140,
            bottom: 5,
            left: 0
          }
        }
      }
    }
    this.data2 = [{ key: "Total", y: 15 }, { key: "CMU", y: 5 }]
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

}
