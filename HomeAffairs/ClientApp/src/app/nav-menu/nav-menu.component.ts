import { Component, OnInit } from '@angular/core';
import { SysProperties } from '../sysproperties';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  sysproperties: SysProperties = {
    title: 'HomeAffairs',
    version: '1.0.0.0',
    alias: 'App ver: ',
    VDDesc: 'Vision-Dream ICT Solutions',
    VDCopyright: '2019 Vision-Dream, Inc. All rights reserved.',
    VDUrlLocal: 'http://visiondream.local',
    VDUrlExternal: 'https://visiondreamict.wordpress.com/'
  };

  constructor() { }

  ngOnInit() {
  }

}
