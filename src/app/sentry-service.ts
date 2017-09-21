import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { SentryEvent } from './sentry-event';
import { EVENTS} from './mock-events';

export class SentryServer {
  dataChange: BehaviorSubject<SentryEvent[]> = new BehaviorSubject<SentryEvent[]>([]);

  get data(): SentryEvent[] {
    return EVENTS;
  }

  constructor() {
    this.dataChange.next(this.data);
  }
}

@Injectable()
export class SentryService extends DataSource<any> {
  server: SentryServer;

  constructor() {
    super();
    this.server = new SentryServer();
  }


  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<SentryEvent[]> {
    return this.server.dataChange;
  }

  disconnect() {}
}
