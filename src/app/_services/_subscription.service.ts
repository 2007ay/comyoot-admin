import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppContants } from '../app-config/app-constant';
import { AppUtil } from './app.util.service';
import { AppBaseService } from './app.base.service';

@Injectable()
export class SubscriptionService extends AppBaseService {

  constructor(protected http: Http, protected appUtil: AppUtil) {
    super(http, appUtil);
  }

  sendSubscription(user: any) {
    return this.http.post(this.appUtil.getApiUrl(AppContants.sendSubscriptoin), user, this.jwt(null))
      .map((response: Response) => response.json());
  }

}
