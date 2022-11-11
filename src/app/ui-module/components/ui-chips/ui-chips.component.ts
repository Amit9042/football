import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const UI_CHIPS_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UIChipsComponent),
  multi: true
};

@Component({
  selector: 'ui-chips',
  template: `
    <div class="ui-chips">
      <p-chips [addOnBlur]="true" [addOnTab]="true" [disabled]="disabled" #pchip [(ngModel)]="value"  [styleClass]="chipType" [inputStyleClass]="'ui-chip-input'" [placeholder]="placeholder">
      </p-chips>
    </div>
  `,
  styleUrls: ['./ui-chips.component.scss'],
  providers: [UI_CHIPS_VALUE_ACCESSOR]
})
export class UIChipsComponent implements OnInit, ControlValueAccessor {

  /* CUSTOM */
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() chipType: ChipType;

  /* CUSTOM */
  private _value: any;

  set value(value: any) {
    this._value = value;
    this.notifyValueChange();
  }

  get value(): any {
    return this._value;
  }

  onModelChange: (value) => {};
  onTouched: () => {};

  constructor() { }

  notifyValueChange(): void {
    if (this.onModelChange) {
      this.onModelChange(this.value);
    }
  }

  ngOnInit(): void {

  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}


export enum ChipType {
  PROGRAM_CHIP = 'PROGRAM_CHIP',
  OFF_WHITE_CHIP = 'OFF_WHITE_CHIP',
}
