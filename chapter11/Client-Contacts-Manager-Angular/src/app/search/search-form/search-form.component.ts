import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  searchField = new FormControl('');

  @Input()
  title: string;

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.searchForm = fb.group({
      searchBox: this.searchField
    })
  }

  ngOnInit() {
    this.searchField.valueChanges.subscribe(result => {
      this.searchEvent.emit(result);
    })
  }
}
