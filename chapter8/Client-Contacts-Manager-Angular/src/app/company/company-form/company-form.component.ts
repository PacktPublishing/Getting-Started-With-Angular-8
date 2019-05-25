import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent {
  // new FormGroup for the company form
  companyForm: FormGroup;

  // new FormControls and validators
  companyName = new FormControl('', Validators.required);
  addressOne = new FormControl('', Validators.required);
  addressTwo = new FormControl('');
  town = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  postCode = new FormControl('', Validators.required);
  country = new FormControl('');
  contactEmail = new FormControl('', Validators.required);
  staffCount = new FormControl('');

  constructor(fb: FormBuilder) {
    this.companyForm = fb.group({
      companyName: this.companyName,
      addressOne: this.addressOne,
      addressTwo: this.addressTwo,
      town: this.town,
      city: this.city,
      postCode: this.postCode,
      country: this.country,
      contactEmail: this.contactEmail,
      staffCount: this.staffCount
    });
  }

  onSubmit() {
    console.log(this.companyForm);
    
  }
}
