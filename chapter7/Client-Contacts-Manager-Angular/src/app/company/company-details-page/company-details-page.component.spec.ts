import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsPageComponent } from './company-details-page.component';

describe('CompanyDetailsPageComponent', () => {
  let component: CompanyDetailsPageComponent;
  let fixture: ComponentFixture<CompanyDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
