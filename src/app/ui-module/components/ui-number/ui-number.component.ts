import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

const NUMBER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UINumberComponent),
  multi: true
};

@Component({
  selector: 'ui-number',
  template: `
  <input [placeholder]="placeholder" type="number" 
        class="ui-number" [(ngModel)]="value" [disabled]="disabled">
  `,
  styleUrls: [`./ui-number.component.scss`],
  providers: [NUMBER_VALUE_ACCESSOR],
})

export class UINumberComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder = '';
  @Input() disabled = false;

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
    this.disabled = isDisabled;
  }
}

