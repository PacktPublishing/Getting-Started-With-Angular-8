import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  // new FormGroup is defined here
  clientForm: FormGroup;

  @Input()
  client: Client;

  @Input()
  edit = false;

  @Output()
  saveClientEvent: EventEmitter<Client> = new EventEmitter();

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

  ngOnInit() {
    if (this.client) {
      console.log(this.client);
    }
  }

  // event called when form is submitted, displaying the output of the form
  saveClient() {
    this.saveClientEvent.emit(this.createClient(this.clientForm));
  }

  private createClient(form: FormGroup) {
    const clientObject: Client = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      telephoneNumber: form.value.telephoneNumber,
      companyName: form.value.companyName
    };

    return clientObject;
  }
}
