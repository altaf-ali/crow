import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, Jsonp, URLSearchParams } from '@angular/http';
import { SentryEvent } from './sentry-event';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import {NULL_EXPR} from "@angular/compiler/src/output/output_ast";

@Injectable()
export class SentryService extends DataSource<any> {
  baseUrl = 'https://sentry.io/api/0/projects/uclspp/publg100/events/';
  Result = 'SUCCESS';

  constructor(private http: Http, private jsonp: Jsonp) {
    super();
  }

  connect(): Observable<SentryEvent[]> {
    let url = 'https://sentry.io/api/0/projects/uclspp/publg100/events/';

    let headers = new Headers();

    headers.append('Target-URL', url);
    headers.append('Authorization', 'Bearer c4b91029f8da4cf9a30e53d36f911c1fb651042ab60a4491a2f28d0c4cab9a15');

    let proxy = 'https://crow-proxy.herokuapp.com';

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
