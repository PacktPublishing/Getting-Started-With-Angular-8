import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsPageComponent } from './client-details-page.component';

describe('ClientDetailsPageComponent', () => {
  let component: ClientDetailsPageComponent;
  let fixture: ComponentFixture<ClientDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsPageComponent ]
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
