import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'underscore';

import { config } from '../chart.config';

import { UserSummary } from "../../../_models/index";
import { AlertService, DashboardService } from '../../../_services/index';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.scss']
})
export class EngagementComponent implements OnInit {

  private dashboardStatus: any = {};
  public selectedValue: string = "gradYear";
  public selectedChartConfig: any;
  public selectedChartData: any;

  public chartTypes = [
    { value: 'employer', viewValue: 'Employed By' },
    { value: 'gradYear', viewValue: 'Graduation Year' }
  ];

  constructor(
    private http: Http,
    private service: DashboardService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.dashboardStatus = {};
    this.getUserStats();
  }

  public onChartTypeChange($event: any): void {

    const values = [];
    if (this.selectedValue === 'gradYear') {
      _.each(this.dashboardStatus[this.selectedValue], function (value: any, key: any) {
        if (key && parseInt(key, 10)) {
          values.push({ x: parseInt(key, 10), y: value.length })
        }
      })
      this.selectedChartConfig = config.lineChart;
    } else if (this.selectedValue === 'employer') {
      _.each(this.dashboardStatus[this.selectedValue], function (value: any, key: any) {
        if (key) {
          values.push({ value: value.length, label: key });
        }
      });
      this.selectedChartConfig = config.multiBarHorizontalChart;
    }

    const chartData: any = { values: values, key: this.selectedValue }
    this.selectedChartData = [chartData];
  }

  private transformData(payload): void {
    let _self = this;
    this.chartTypes.forEach(function (chartType: any, i) {
      _self.dashboardStatus[chartType.value] = _.groupBy(payload, chartType.value);
    });
  }

  private getUserStats(): void {
    this.service.getStaticsData().subscribe(data => {
      this.transformData(data.payload);
      this.onChartTypeChange({});
    }, error => {
      this.alertService.error(error);
    });
  }

}
