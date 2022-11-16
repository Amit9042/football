import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UIDropdownComponent),
  multi: true
};

@Component({
  selector: 'ui-dropdown',
  template: `
  <div class="ui-dropdown">
      <p-dropdown [disabled]="disabled" [optionValue]="'value'" [optionLabel]="'label_'+currentLocale" [(ngModel)]="value" [autoDisplayFirst]="autoDisplayFirst" [options]="options"></p-dropdown>
  </div>
`,
  styleUrls: ['./ui-dropdown.component.scss'],
  providers: [DROPDOWN_VALUE_ACCESSOR]
})
export class UIDropdownComponent implements OnInit, ControlValueAccessor {


  
  @Input() currentLocale = 'en';
  @Input() autoDisplayFirst = false;
  @Input() disabled = false;
  private _options: any[] = [];

  @Input() public set options(v: any[]) {
    this._options = v;
  }

  public get options(): any[] {
    return this._options;
  }


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
