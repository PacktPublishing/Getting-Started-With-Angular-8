import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Company } from '../company';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  // new FormGroup for the company form
  companyForm: FormGroup;

  @Input()
  company: Company;

  @Input()
  edit = false;

  @Output()
  saveCompanyEvent: EventEmitter<Company> = new EventEmitter();

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
  industry = new FormControl('')

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
      staffCount: this.staffCount,
      industry: this.industry
    });

  }
  ngOnInit() {
    if (this.company) {
      console.log(this.company);
    }
  }

  saveCompany() {
    this.saveCompanyEvent.emit(this.createCompany(this.companyForm));
  }

  private createCompany(form: FormGroup) {
    const companyObject: Company = {
      companyName: form.value.companyName,
      address1: form.value.addressOne,
      address2: form.value.addressTwo,
      town: form.value.town,
      city: form.value.city,
      postcode: form.value.postCode,
      country: form.value.country,
      contactEmail: form.value.contactEmail,
      staffCount: form.value.staffCount,
      industry: form.value.industry
    };

    return companyObject;
  }
}
