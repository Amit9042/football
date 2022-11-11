/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UIFieldErrorComponent } from './ui-field-error.component';

describe('ValidationErrorComponent', () => {
  let component: UIFieldErrorComponent;
  let fixture: ComponentFixture<UIFieldErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIFieldErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
