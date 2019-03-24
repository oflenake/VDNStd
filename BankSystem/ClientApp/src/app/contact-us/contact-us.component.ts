import { Component, OnInit } from '@angular/core';
import { SysProperties } from '../sysproperties';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  sysproperties: SysProperties = {
    title: 'BankSystem',
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
