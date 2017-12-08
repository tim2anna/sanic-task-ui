import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Worker } from './worker';
import {promise} from 'selenium-webdriver';
import when = promise.when;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit {

  // 排序
  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;

  sort(sortName, value) {
    this.sortName = sortName;
    this.sortValue = value;
    Object.keys(this.sortMap).forEach(key => {
      if (key !== sortName) {
        this.sortMap[ key ] = null;
      } else {
        this.sortMap[ key ] = value;
      }
    });

    this.workerTable = [ ...this.workerTable.sort((a, b) => {
      if (a[ this.sortName ] > b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? 1 : -1;
      } else if (a[ this.sortName ] < b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? -1 : 1;
      } else {
        return 0;
      }
    }) ];
  }

  workerCards: Worker[] = [];
  workerTable: any[] = [];
  recentExceptionJobs: any[] = [];
  jobNumbers: object = {running: 0, enqueue: 0, failure: 0, success: 0};

  _formatOne = percent => `10000`;

  _formatTwo = percent => {
    if(percent == 'WorkerStatus.IDLE') {
      return '空闲';
    }
  };


  constructor(private http: HttpClient, private router: Router) { }

  getWorkerCards(): void {
    this.http.get('/api/dashboard/worker_cards').subscribe(resp => {
      this.workerCards = resp['data'] as Worker[];
    });
  }

  getWorkerTable(): void {
    this.http.get('/api/dashboard/worker_table').subscribe(resp => {
      this.workerTable = resp['data'] as any[];
    });
  }

  getRecentExceptionJobs(): void {
    this.http.get('/api/dashboard/recent_exception_jobs').subscribe(resp => {
      this.recentExceptionJobs = resp['data'] as any[];
    });
  }

  getJobNumbers(): void {
    this.http.get('/api/dashboard/job_numbers').subscribe(resp => {
      this.jobNumbers = resp['data'] as object;
    });
  }

  ngOnInit() {
    this.getWorkerCards();
    this.getWorkerTable();
    this.getRecentExceptionJobs();
    this.getJobNumbers();
  }
}