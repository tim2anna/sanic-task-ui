import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
})
export class WorkerComponent  implements OnInit {
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;

  constructor(private http: HttpClient, private router: Router) {
  }

  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    const params = new HttpParams().set('page', this._current.toString()).set('size', this._pageSize.toString());

    this.http.get('/api/workers', {params: params}).subscribe(resp => {
      const data = resp['data'];
      this._loading = false;
      this._total = data['total'];
      this._dataSet = data['results'];
    });
  }

  ngOnInit() {
    this.refreshData();
  }
}
