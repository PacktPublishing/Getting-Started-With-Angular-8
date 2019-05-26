import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomMaterialModule } from 'src/app/custom-material.module';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { ClientDetailsPageComponent } from './client-details-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClientService } from '../client.service';


describe('ClientDetailsPageComponent', () => {
  let component: ClientDetailsPageComponent;
  let fixture: ComponentFixture<ClientDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, CustomMaterialModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ClientDetailsPageComponent, ClientDetailComponent],
      providers: [ClientService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
