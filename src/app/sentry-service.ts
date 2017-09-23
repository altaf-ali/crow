import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { SentryEvent } from './sentry-event';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

@Injectable()
export class SentryService extends DataSource<any> {
  constructor(private http: Http) {
    super();
  }

  connect(): Observable<SentryEvent[]> {
    const url = 'https://sentry.io/api/0/projects/uclspp/publg100/events/';
    const proxy = 'https://crow-proxy.herokuapp.com';

    const headers = new Headers();
    headers.append('Target-URL', url);
    headers.append('Authorization', 'Bearer 40fd6d9e89f94bbc8642b58cd39585c251681a89304f410aaf74e5bd974b8b5e');

    return this.http.get(proxy,{ headers: headers} )
      .map(response => response.json().map(data => {
        const event: SentryEvent = {
          timestamp: data.context.timestamp, type: data.metadata.type, context: data.user.email
        };
        return event;
      }));
  }

  disconnect() {}
}
