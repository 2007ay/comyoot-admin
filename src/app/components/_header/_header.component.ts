import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/index';

@Component({
  selector: 'app-header',
  templateUrl: './_header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {

  public fullImagePath = './assets/img/comyoot-log.png';
  public subscriptionPermission = false;
  public userPermissions;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    
    this.userPermissions = this.authenticationService.getUserPermissions();
    this.subscriptionPermission = this.userPermissions.subscriptionPermission;
  }

  ngOnInit() {
    // console.log(this.authenticationService.getUserPermissions());
  }

  OnMenuClick(route) {
    this.router.navigate(['/' + route]);
  }

}
