import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerFirstPage } from './inner-first.page';

describe('InnerFirstPage', () => {
  let component: InnerFirstPage;
  let fixture: ComponentFixture<InnerFirstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerFirstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
