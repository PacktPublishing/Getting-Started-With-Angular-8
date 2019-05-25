import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  searchField: string;

  @Input()
  title: string;

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter();

  onSubmit() {
    this.searchEvent.emit(this.searchField);
  }
}
