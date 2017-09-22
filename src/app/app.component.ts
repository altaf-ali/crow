import { Component, OnInit } from '@angular/core';

import { SentryService} from './sentry-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Sentry Events';
  //dataSource: SentryService | null;

  displayedColumns = ['date', 'time', 'event', 'context'];

  ngOnInit(): void {
    //this.dataSource = SentryService;
  }

  constructor(private dataSource: SentryService) {}
}

