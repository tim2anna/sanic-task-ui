import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkerComponent } from './worker/worker.component';
import { QueueComponent } from './queue/queue.component';
import { JobComponent } from './job/job.component';

import { BrPipe } from './custom.filter';
import { MockInterceptor } from './mock.interceptor';
import './mock.interceptor'
import { environment } from '../environments/environment';

console.dir(environment);

@NgModule({
  declarations: [
    // Components
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    WorkerComponent,
    QueueComponent,
    JobComponent,
    // Pipes
    BrPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MockInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
