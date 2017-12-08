import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

import { DashboardMock } from './dashboard/dashboard.mock';
import { QueueMock } from './queue/queue.mock';
import { WorkerMock } from './worker/worker.mock';

const mockData = [
  DashboardMock,
  QueueMock,
  WorkerMock,
];


@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.dir(mockData);
    for(let i of mockData) {
      for(let key in i) {
        let k = req.method + ' ' + req.url;
        if(k == key) {
          let data = i[key](req.params);
          console.dir(k);
          console.dir(data);
          console.dir(i);
          return Observable.of(new HttpResponse({body: data}));
        }
      }
    }
    return next.handle(req);
  }
}