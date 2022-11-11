import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIConfirmAlertComponent } from './ui-confirm-alert.component';

describe('ConfirmAlertModalComponent', () => {
  let component: UIConfirmAlertComponent;
  let fixture: ComponentFixture<UIConfirmAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIConfirmAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIConfirmAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
