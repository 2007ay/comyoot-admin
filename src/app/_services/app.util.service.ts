import { Injectable, Inject } from '@angular/core';

import { environment } from '../../environments/environment';

import { APP_CONFIG } from '../app-config/app-config.constants';
import { IAppConfig } from '../app-config/app-config.interface';
import { AppContants } from '../app-config/app-constant';

@Injectable()
export class AppUtil {
  
  constructor(
    @Inject(APP_CONFIG)
    private config: IAppConfig) { }

  public getApiUrl(url): string {
    return [environment.comyootApiHost, this.config.API_VERSION, url].join('/');
  }
}
