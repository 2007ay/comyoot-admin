import { Component, OnInit } from '@angular/core';
import { AlertService, DashboardService } from '../../_services/index';

import * as _ from 'underscore';
import { debug } from 'util';

@Component({
  selector: 'app-user-org',
  templateUrl: './user-org.component.html',
  styleUrls: ['./user-org.component.css']
})
export class UserOrgComponent implements OnInit {

  public filterUserList: any;
  public filterQuery;
  public rowsOnPage = 100;
  public sortBy = 'firstLoginTime';
  public selectedOrgnization: string;
  public sortOrder = 'asc';
  public orgnizationList = [];

  constructor(private service: DashboardService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getOrganizationList();
  }

  private getOrganizationList(): void {

    this.service.getOrganizationList().subscribe(data => {
      this.orgnizationList = _.map(data.payload, (d) => {
        return {
          viewValue: d,
          value: d
        };
      }) || [];

      if (this.orgnizationList.length) {
        this.selectedOrgnization = this.orgnizationList[0];
        this.fetch(this.selectedOrgnization);
      }

    }, error => {
      this.alertService.error(error);
    });
  }

  fetch(selectedValue) {
    this.service.getUserListByParams({ organization_name: selectedValue }).subscribe(data => {
      this.filterUserList = data.payload.data;
    }, error => {
      this.alertService.error(error);
    });
  }

  public onSelectChange(selectedValue): void {
    this.fetch(selectedValue);
  }

}
