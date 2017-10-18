import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'd3';
import 'nvd3';

declare let d3: any;

import { config } from './chart.config';
import { UserSummary } from "../../_models/index";
import { AlertService,  DashboardService } from '../../_services/index';

@Component({
  selector: 'app-dashboard-report',
  templateUrl: './_dashboard-report.component.html',
  styleUrls: ['./_dashboard-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardReportComponent implements OnInit {

  public userSummary:UserSummary;
  public data2;
  public data3;
  private options;
  public options2;
  public multiBarChart;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "emailId";
  public sortOrder = "asc";
  private tempPieChartData;

  constructor(private http: Http, private service:DashboardService, private alertService:AlertService) {
  }

  ngOnInit(): void {

    this.http.get("assets/data/bar.json")
      .subscribe((data) => {
        setTimeout(() => {
          this.data3 = data.json();
        }, 1000);
      });

    this.multiBarChart = config.multiBarChart;

    this.options = {
      chart: {
        type: 'pieChart',
        height: 445,
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
    this.options2 = config.pieChart;
    this.data2 = [{ key: "Male", y: 15 }, { key: "Female", y: 5 }]

    this.getUserSummary();
  }

  public toInt(num: string) {
    return +num;
  }

  private getUserSummary():void {
     this.service.getConnectionSummary().subscribe(data => {
       this.userSummary = data.payload;
     }, error => {
       this.alertService.error(error);
     })
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }
}
