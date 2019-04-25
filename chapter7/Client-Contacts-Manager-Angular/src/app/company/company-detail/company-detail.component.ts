import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent {
  editView = false;

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

  edit(): void {
    this.toggleEdit();
  }

  delete(company: Company): void {
    this.deleteEvent.emit(company);
  }

  save(): void {
    this.saveEvent.emit(this.company);
    this.toggleEdit();
  }

  search(): void {
    this.searchEvent.emit();
  }

  private toggleEdit(): void {
    this.editView = !this.editView;
  }
}
