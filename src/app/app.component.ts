import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Generate your GA URL';
  }
}
