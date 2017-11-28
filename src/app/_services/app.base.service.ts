import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppUtil } from './index';

export class AppBaseService {

  constructor(protected http: Http, protected appUtil: AppUtil) { }

  httpGetReq(endPoint, param) {
    return this.http.get(this.appUtil.getApiUrl(endPoint), this.jwt(param)).map((response: Response) => response.json());
  }

  public getUserPermissions() {
    let userPermissions = {};
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      userPermissions = currentUser.userPermissions || {};
    }
    return userPermissions;
  }

  public jwt(params) {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': currentUser.token });
      if (params) {
        return new RequestOptions({ headers: headers, params: params });
      } else {
        return new RequestOptions({ headers: headers });
      }
    }
  }
}
