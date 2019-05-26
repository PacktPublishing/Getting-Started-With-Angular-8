import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomMaterialModule } from 'src/app/custom-material.module';
import { CompanyDetailComponent } from '../company-detail/company-detail.component';
import { CompanyDetailsPageComponent } from './company-details-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CompanyDetailsPageComponent', () => {
  let component: CompanyDetailsPageComponent;
  let fixture: ComponentFixture<CompanyDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [CompanyDetailsPageComponent, CompanyDetailComponent]
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
