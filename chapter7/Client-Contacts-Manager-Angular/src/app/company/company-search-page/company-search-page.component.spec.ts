import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchPageComponent } from './company-search-page.component';

describe('CompanySearchPageComponent', () => {
  let component: CompanySearchPageComponent;
  let fixture: ComponentFixture<CompanySearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
