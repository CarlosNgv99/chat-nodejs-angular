import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reporte1Page } from './reporte1.page';

describe('Reporte1Page', () => {
  let component: Reporte1Page;
  let fixture: ComponentFixture<Reporte1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reporte1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reporte1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
