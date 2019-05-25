import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list-item',
  templateUrl: './company-list-item.component.html',
  styleUrls: ['./company-list-item.component.scss']
})
export class CompanyListItemComponent  {

  @Input()
  companies: any;

  constructor(private router: Router) { }


}
