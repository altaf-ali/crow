import { Component, OnInit } from '@angular/core';

import { SentryService} from './sentry-service';

@Component({
  selector: 'app-root',
  providers: [SentryService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Sentry Events';
  dataSource: SentryService | null;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
    this.dataSource = new SentryService();
  }

}

