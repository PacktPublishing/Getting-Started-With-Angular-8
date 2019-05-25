import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly companyAPIUrl = 'api/company';

  constructor(private httpClient: HttpClient) {}

  // gets all the companies
  getCompanyList(): any {
    const url = `${this.companyAPIUrl}`;
    return this.httpClient.get(url);
  }

  // get a company by the ID
  getCompanyByID(companyId: string): any {
    const url = `${this.companyAPIUrl}/${companyId}`;
    return this.httpClient.get(url);
  }

  // archive a client
  deleteCompany(companyId: string): any {
    const url = `${this.companyAPIUrl}/${companyId}`;
    return this.httpClient.delete(url);
  }

  // update a clients details
  updateCompany(company: Company): any {
    const url = `${this.companyAPIUrl}`;
    return this.httpClient.put(url, company);
  }

  // search for a company by name
  search(searchTerm: string): any {
    searchTerm.trim();
    const url = `${this.companyAPIUrl}`;
    const searchOptions = searchTerm ? { params: new HttpParams().set('companyName', searchTerm) } : {};
    return this.httpClient.get(url, searchOptions);
  }
}
