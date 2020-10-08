import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchatsPage } from './adminchats.page';

describe('AdminchatsPage', () => {
  let component: AdminchatsPage;
  let fixture: ComponentFixture<AdminchatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminchatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
