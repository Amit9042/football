import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, forwardRef } from '@angular/core';

export const UI_INPUT_SWITCH_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UIInputSwitchComponent),
  multi: true
};

@Component({
  selector: 'ui-input-switch',
  template: `
    <div class="ui-input-switch">
        <p-inputSwitch [(ngModel)]="value" class="prime-toggle__default"></p-inputSwitch>
    </div>
  `,
  styleUrls: ['./ui-input-switch.component.scss'],
  providers: [UI_INPUT_SWITCH_VALUE_ACCESSOR]
})


export class UIInputSwitchComponent implements OnInit, ControlValueAccessor {

  private _value: any;

  set value(value: any) {
    this._value = value;
    this.notifyValueChange();
  }

  get value(): any {
    return this._value;
  }

  onChange: (value) => {};
  onTouched: () => {};

  constructor() { }

  notifyValueChange(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  ngOnInit(): void {

  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
