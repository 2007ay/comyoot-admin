import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './_header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {

  private fullImagePath = "./assets/img/comyoot-log.png";
  constructor() { }

  ngOnInit() {
  }

}
