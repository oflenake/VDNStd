import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css']
})
export class RegisterProfileComponent implements OnInit {
  selectedTitle = '--Select Title--';
  selectedProvince = '--Select Province--';

  titles = [this.selectedTitle, 'Dr', 'Mr', 'Miss', 'Mrs'];

  provinces = [
    this.selectedProvince, 'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal',
    'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'
  ];

  usersProfile = {
    usersProfileID: 1, userID: 1, title: this.titles[0], initials: '', firstName: 'Onkgopotse',
    lastName: 'Lenake', idNumber: '', dateOfBirth: '', email: '', cellPhone: '',
    province: this.provinces[0], address: '', city: '', suburb: '', code: ''
  };

  usersProfileForm: FormGroup;

  constructor() { }

  ngOnInit() {
    //this.questionsForm = new FormGroup({
    //  'name': new FormControl(this.hero.name, [
    //    Validators.required,
    //    Validators.minLength(4),
    //    forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    //  ]),
    //  'alterEgo': new FormControl(this.hero.alterEgo),
    //  'power': new FormControl(this.hero.power, Validators.required)
    //});
  }

}
