import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../assets/css/_.icons.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Comyoot';
}
