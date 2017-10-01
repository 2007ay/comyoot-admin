import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppContants } from "../app-config/app-constant";
import { AppUtil } from "./app.util.service"
import { AppBaseService } from "./app.base.service"


@Injectable()
export class AuthenticationService  extends AppBaseService {

  constructor(protected http: Http, protected appUtil:AppUtil) {
    super(http, appUtil);
  }

  login(username: string, password: string) {

    return this.http.post(this.appUtil.getApiUrl(AppContants.loginApiEndPoint), { emailId: username, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let resp = response.json();
        if (resp && resp.success) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(resp.payload));
        } else {
          alert("invalid details, Try agian")
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
