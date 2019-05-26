import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit, OnChanges {
  editView = false;

  clientEditForm: FormGroup;

  @Input()
  client: Client;

  @Output()
  searchEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  editEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  deleteEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  saveEvent: EventEmitter<Client> = new EventEmitter();

  // creating new FormControls, with validation
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  telephoneNumber = new FormControl('');

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.clientEditForm = this.fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      telephoneNumber: this.telephoneNumber
    })
  }

  ngOnChanges(change: SimpleChanges) {
    
    if(change.client.currentValue !== undefined) {
      this.populateForm(change.client.currentValue);
    }
  }

  searchAll(): void {
    this.searchEvent.emit();
  }

  edit(): void {
    this.toggleEdit();
  }

  delete(client: Client): void {
    this.deleteEvent.emit(client);
  }

  save(): void {
    this.saveEvent.emit(this.client);
    this.toggleEdit();
  }

  private toggleEdit(): void {
    this.editView = !this.editView;
  }

  private populateForm(clientDetails: Client): void {
    this.clientEditForm.get('firstname').setValue(clientDetails.firstname)
    this.clientEditForm.get('lastname').setValue(clientDetails.lastname)
    this.clientEditForm.get('email').setValue(clientDetails.email)
    this.clientEditForm.get('telephoneNumber').setValue(clientDetails.telephoneNumber)
  }

}
