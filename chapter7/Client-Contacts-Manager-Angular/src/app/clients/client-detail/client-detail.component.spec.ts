import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailComponent } from './client-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('ClientDetailComponent', () => {
  let component: ClientDetailComponent;
  let fixture: ComponentFixture<ClientDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDetailComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });
});
