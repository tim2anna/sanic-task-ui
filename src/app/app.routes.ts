/***
 * 路由文件
 */

import {Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkerComponent } from './worker/worker.component';
import { QueueComponent } from './queue/queue.component';
import { JobComponent } from './job/job.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'worker', component: WorkerComponent },
      { path: 'queue', component: QueueComponent },
      { path: 'job', component: JobComponent },
    ]
  },
];
