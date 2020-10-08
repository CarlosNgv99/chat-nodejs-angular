import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosComponent } from './contactos.component';

describe('ContactosComponent', () => {
  let component: ContactosComponent;
  let fixture: ComponentFixture<ContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactosComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
