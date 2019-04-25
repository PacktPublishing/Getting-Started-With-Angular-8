import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPageComponent } from './client-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ClientService } from '../client.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClientPageComponent', () => {
  let component: ClientPageComponent;
  let fixture: ComponentFixture<ClientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [HttpClient, HttpHandler, ClientService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
