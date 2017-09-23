import { Component } from '@angular/core';

import { SentryService} from './sentry-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sentry Events';

  displayedColumns = ['date', 'time', 'event', 'context'];

  constructor(public dataSource: SentryService) {}
}


