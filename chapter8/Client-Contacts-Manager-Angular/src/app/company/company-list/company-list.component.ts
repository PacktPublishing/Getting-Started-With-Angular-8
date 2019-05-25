import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  @Input()
  companies: any;

  constructor(private router: Router) {}

  viewCompanyDetails(company: Company): void {
    this.router.navigateByUrl('/company/details/' + company.id);
  }
}
