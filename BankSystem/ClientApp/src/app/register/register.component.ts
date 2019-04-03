import { Component, OnInit } from '@angular/core';
import { SYSTEMPROPERTIES } from '../mock-systemproperties';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  systemProperties = SYSTEMPROPERTIES;

  constructor() { }

  ngOnInit() {
  }

}
