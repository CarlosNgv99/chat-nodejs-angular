import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAdminPage } from './usuarios-admin.page';

describe('UsuariosAdminPage', () => {
  let component: UsuariosAdminPage;
  let fixture: ComponentFixture<UsuariosAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
