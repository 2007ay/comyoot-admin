import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';
import { AppContants } from "../app-config/app-constant";
import { AppUtil } from "./app.util.service"
import { AppBaseService } from "./app.base.service";

@Injectable()
export class UserService  extends AppBaseService {

  constructor(protected http: Http, protected appUtil:AppUtil) {
    super(http, appUtil)
  }

  getAll() {
    return this.http.get('/api/users', this.jwt(null)).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt(null)).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(this.appUtil.getApiUrl(AppContants.registerUserApiEndPoint), user, this.jwt(null)).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt(null)).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt(null)).map((response: Response) => response.json());
  }

}
