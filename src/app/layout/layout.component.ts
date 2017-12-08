import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {
  isFetching = false;
  menus: any[] = [
    {
      'text': 'Dashboard',
      'link': '/dashboard',
      'icon': 'anticon-home',
      'selected': false
    },
    {
      'text': 'Worker',
      'link': '/worker',
      'icon': 'anticon-api',
      'selected': false
    },
    {
      'text': 'Queue',
      'link': '/queue',
      'icon': 'anticon-database',
      'selected': false
    },
    {
      'text': 'Job',
      'link': '/job',
      'icon': 'anticon-bulb',
      'selected': false
    },
  ];

  constructor(router: Router) {
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart)
        this.isFetching = true;
      if (!(evt instanceof NavigationEnd)) return;
      setTimeout(() => {
        this.isFetching = false;
      }, 100);
      this.setSelected(evt.urlAfterRedirects || evt.url);
    });
  }

  ngOnInit() {}

  setSelected(url: string) {
    if (!url) return;
    this.menus.forEach((child) => {
      child.selected = false;
      if (url === child.link) {
        child.selected = true;
      }
      if (child.children && child.children.length > 0) {
        child.children.forEach((item) => {
          item.selected = false;
          if (url === item.link) {
            child.selected = true;
            item.selected = true;
          }
        });
      }
    });
  }
}
