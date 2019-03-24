import { Component, OnInit } from '@angular/core';
import { SysProperties } from '../../sysproperties';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
