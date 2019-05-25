import { Component, OnInit } from "@angular/core";
import { CompanyService } from "../company.service";
import { Router } from "@angular/router";
import { Company } from "../company";

@Component({
    selector: 'app-company-page',
    templateUrl: './company-page.component.html',
    styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {
    companyList: any[];

    constructor(private companyService: CompanyService, private router: Router) { }

    ngOnInit() {
        this.companyService.getCompanyList().subscribe(res => {
            this.companyList = res;
        })
    }

    saveCompany(companyDetails: Company) {
        this.companyService.save(companyDetails).subscribe(company => {
            this.companyList.push(company);
            this.router.navigateByUrl('/company/search');

        })
    }
}
