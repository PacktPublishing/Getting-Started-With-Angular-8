import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-details-page',
  templateUrl: './company-details-page.component.html',
  styleUrls: ['./company-details-page.component.scss']
})
export class CompanyDetailsPageComponent implements OnInit {
  selectedCompany: Company;

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const companyID = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyByID(companyID).subscribe((res: Company) => {
      this.selectedCompany = res;
    });
  }

  searchEventHandler(): void {
    this.backToSearchPage();
  }

  editCompanyHandler(company: Company): void {
    this.router.navigateByUrl('/company/edit/' + company.id);
  }

  deleteCompanyHandler(company: Company): void {
    this.companyService.deleteCompany(company.id).subscribe(() => {
      this.backToSearchPage();
    });
  }

  saveCompanyHandler(company: Company): void {
    this.companyService.updateCompany(company).subscribe(() => {
      this.backToSearchPage();
    });
  }

  private backToSearchPage(): void {
    this.router.navigateByUrl('/company/search');
  }
}
