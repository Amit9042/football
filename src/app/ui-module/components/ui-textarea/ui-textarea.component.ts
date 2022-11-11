import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Input, forwardRef } from '@angular/core';

export const UI_TEXTAREA_COMPOENT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UITextareaCompoent),
  multi: true
};

@Component({
  selector: 'ui-textarea',
  template: `
  <div class="ui-textarea">
  <textarea
  #uiTextarea
  [disabled]="disabled"
  [(ngModel)]="value"
  [maxLength]="totalCounts || 5000"
  class="ui-textarea-input" [placeholder]="placeholder" rows="8"></textarea>
    <div class="count-section" *ngIf="totalCounts">
      {{value?.length || 0}} / {{totalCounts}}
    </div>
  </div>
  `,
  styleUrls: ['./ui-textarea.component.scss'],
  providers: [UI_TEXTAREA_COMPOENT_VALUE_ACCESSOR]
})
export class UITextareaCompoent implements OnInit, ControlValueAccessor {

  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() totalCounts: number; //required

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
