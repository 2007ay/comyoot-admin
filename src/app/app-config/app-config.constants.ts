
import { InjectionToken } from "@angular/core";
import { IAppConfig } from "./app-config.interface";

export const APP_DI_CONFIG: IAppConfig = {
  API_VERSION: 'V1.0'
};

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');
