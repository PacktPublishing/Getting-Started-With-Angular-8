import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: CompanyService = TestBed.get(CompanyService);
    expect(service).toBeTruthy();
  });
});
