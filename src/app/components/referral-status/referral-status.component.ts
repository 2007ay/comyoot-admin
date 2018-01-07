import { Component, OnInit } from '@angular/core';

import { AlertService, DashboardService } from '../../_services/index';
import { debug } from 'util';

@Component({
  selector: 'app-referral-status',
  templateUrl: './referral-status.component.html',
  styleUrls: ['./referral-status.component.css']
})
export class ReferralStatusComponent implements OnInit {

  public referralSummary: any;
  public filterQuery;
  public rowsOnPage = 10;
  public sortBy = 'dateOfAcceptance';
  public sortOrder = 'asc';

  constructor(private service: DashboardService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getReferralStatus();
  }

  private getReferralStatus(): void {
    this.service.getReferralStatus().subscribe(data => {
      this.referralSummary = data.payload.data;
    }, error => {
      this.alertService.error(error);
    });
  }

}
