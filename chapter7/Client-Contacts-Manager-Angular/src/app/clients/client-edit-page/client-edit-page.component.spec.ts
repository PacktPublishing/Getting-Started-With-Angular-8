import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditPageComponent } from './client-edit-page.component';

describe('ClientEditPageComponent', () => {
  let component: ClientEditPageComponent;
  let fixture: ComponentFixture<ClientEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEditPageComponent ]
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
