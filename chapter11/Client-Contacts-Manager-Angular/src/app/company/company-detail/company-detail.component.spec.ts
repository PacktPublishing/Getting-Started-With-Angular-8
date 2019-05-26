import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailComponent } from './company-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from 'src/app/custom-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CompanyDetailComponent', () => {
  let component: CompanyDetailComponent;
  let fixture: ComponentFixture<CompanyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, CustomMaterialModule],
      declarations: [ CompanyDetailComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
