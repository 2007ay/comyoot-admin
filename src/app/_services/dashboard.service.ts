import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppContants } from '../app-config/app-constant';
import { AppBaseService } from './app.base.service';
import { AppUtil } from './app.util.service';

@Injectable()
export class DashboardService extends AppBaseService {

  constructor(protected http: Http, protected appUtil: AppUtil) {
    super(http, appUtil);
  }

  getConnectionSummary() {
    return this.httpGetReq(AppContants.userSummaryApiEndPoint, null);
  }

  getStaticsData() {
    return this.httpGetReq(AppContants.getStaticsApiEndPoint, null);
  }

}
