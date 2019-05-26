import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ClientFormComponent } from '../client-form/client-form.component';
import { ClientEditPageComponent } from './client-edit-page.component';
import { ClientService } from '../client.service';


describe('ClientEditPageComponent', () => {
  let component: ClientEditPageComponent;
  let fixture: ComponentFixture<ClientEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [ClientEditPageComponent, ClientFormComponent],
      providers: [ClientService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
