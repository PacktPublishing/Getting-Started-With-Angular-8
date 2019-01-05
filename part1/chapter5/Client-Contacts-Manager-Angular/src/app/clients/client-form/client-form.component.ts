import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  // new FormGroup is defined here
  clientForm: FormGroup;

  // creating new FormControls, with validation
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  telephoneNumber = new FormControl('');
  companyName = new FormControl('', Validators.required);

  // in the constructor we create the a FormGroup and set the properties of
  // the formGroup to the FormControls then set it to be the clientForm we use
  // in the template.
  constructor(fb: FormBuilder) {
    this.clientForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      telephoneNumber: this.telephoneNumber,
      companyName: this.companyName
    });
  }

  ngOnInit() {}

  // event called when form is submitted, displaying the output of the form
  saveClient() {
    console.log(this.clientForm);
  }
}
