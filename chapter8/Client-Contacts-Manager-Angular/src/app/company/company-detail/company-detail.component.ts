import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from '../company';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnChanges {
  editView = false;

  companyEditForm: FormGroup;

  // creating new FormControls, with validation
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

  @Input()
  company: Company;

  @Output()
  searchEvent: EventEmitter<Company> = new EventEmitter();

  @Output()
  editEvent: EventEmitter<Company> = new EventEmitter();

  @Output()
  deleteEvent: EventEmitter<Company> = new EventEmitter();

  @Output()
  saveEvent: EventEmitter<Company> = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.companyEditForm = fb.group({
      companyName: this.companyName,
      contactEmail: this.contactEmail,
      addressOne: this.addressOne,
      addressTwo: this.addressTwo,
      town: this.town,
      city: this.city,
      postCode: this.postCode,
      country: this.country,
      staffCount: this.staffCount,
      industry: this.industry
    });
  }

  ngOnChanges(change: SimpleChanges) {
    if(change.company.currentValue !== undefined) {
      this.populateForm(change.company.currentValue)
    }
  }

  edit(): void {
    this.toggleEdit();
  }

  delete(company: Company): void {
    this.deleteEvent.emit(company);
  }

  save(): void {
    this.saveEvent.emit(this.createCompanyObject(this.companyEditForm));
  }

  search(): void {
    this.searchEvent.emit();
  }

  private toggleEdit(): void {
    this.editView = !this.editView;
  }

  private populateForm(companyDetails: Company): void {
    this.companyEditForm.get('contactEmail').setValue(companyDetails.contactEmail);
    this.companyEditForm.get('addressOne').setValue(companyDetails.address1);
    this.companyEditForm.get('addressTwo').setValue(companyDetails.address2);
    this.companyEditForm.get('town').setValue(companyDetails.town);
    this.companyEditForm.get('city').setValue(companyDetails.city);
    this.companyEditForm.get('country').setValue(companyDetails.country);
    this.companyEditForm.get('postCode').setValue(companyDetails.postcode);
    this.companyEditForm.get('industry').setValue(companyDetails.industry);
    this.companyEditForm.get('staffCount').setValue(companyDetails.staffCount);
  }

  private createCompanyObject(form: FormGroup) {
    const companyObject: Company = {
      id: this.company.id,
      companyName: this.company.companyName,
      address1: form.value.address1,
      address2: form.value.address2,
      town: form.value.town,
      city: form.value.city,
      postcode: form.value.postCode,
      contactEmail: form.value.contactEmail,
      country: form.value.country,
      industry: form.value.industry,
      staffCount: form.value.staffCount

    }
    return companyObject;
  }
}
