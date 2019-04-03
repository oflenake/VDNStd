import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HomeAffairs';
  //faCoffee = faCoffee;

  //registerForm: FormGroup;
  formGroupRegister: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroupRegister = this.formBuilder.group({
      validateFirstName: ['', Validators.required],
      validateLastName: ['', Validators.required],
      validateEmail: ['', [Validators.required, Validators.email]],
      validatePassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get formValidators() { return this.formGroupRegister.controls; }

  // 
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroupRegister.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroupRegister.value))
  }
}
