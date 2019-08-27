import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesPagePage } from './botoes-page.page';

describe('BotoesPagePage', () => {
  let component: BotoesPagePage;
  let fixture: ComponentFixture<BotoesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoesPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
