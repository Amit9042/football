import { Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UIInputComponent),
  multi: true
};

@Component({
  selector: 'ui-input',
  template: `
  <input #uiInput [placeholder]="placeholder" [type]="type"
        class="ui-input"  [(ngModel)]="value" [disabled]="disabled">
  `,
  styleUrls: [`./ui-input.component.scss`],
  providers: [INPUT_VALUE_ACCESSOR],
})

export class UIInputComponent implements ControlValueAccessor {

  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() type = 'text';
  

  inputElementRef: ElementRef;

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