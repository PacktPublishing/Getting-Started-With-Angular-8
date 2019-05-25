import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly companyAPIUrl = 'api/company';

  constructor(private httpClient: HttpClient) {}

  // gets all the companies
  getCompanyList(): Observable<Object> {
    const url = `${this.companyAPIUrl}`;
    return this.httpClient.get(url);
  }

  // get a company by the ID
  getCompanyByID(companyId: string): Observable<Object> {
    const url = `${this.companyAPIUrl}/${companyId}`;
    return this.httpClient.get(url);
  }

  // archive a client
  deleteCompany(companyId: string): Observable<Object> {
    const url = `${this.companyAPIUrl}/${companyId}`;
    return this.httpClient.delete(url);
  }

  // update a clients details
  updateCompany(company: Company): Observable<Object> {
    const url = `${this.companyAPIUrl}`;
    return this.httpClient.put(url, company);
  }

  // search for a company by name
  search(searchTerm: string): Observable<Object> {
    searchTerm.trim();
    const url = `${this.companyAPIUrl}`;
    const searchOptions = searchTerm ? { params: new HttpParams().set('companyName', searchTerm) } : {};
    return this.httpClient.get(url, searchOptions);
  }
}
