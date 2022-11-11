import { ElementRef, ViewChild, Component, forwardRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

export const DATE_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UIDatePickerComponent),
  multi: true
};

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMMM DD YYYY, hh:mm A',
  },
  display: {
    dateInput: 'MMMM DD YYYY, hh:mm A',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'ui-date-picker',
  templateUrl: './ui-date-picker.component.html',
  styleUrls: [`./ui-date-picker.component.scss`],
  providers: [DATE_PICKER_VALUE_ACCESSOR,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class UIDatePickerComponent implements ControlValueAccessor {

  disabled = false;
  @ViewChild('datepickerTime', { static: false }) datepickerTime: ElementRef;
  @Input() placeholder = '';
  hourList1 = [1, 2, 3, 4, 5, 6];
  hourList2 = [7, 8, 9, 10, 11, 12];
  minuteList = [0, 15, 30, 45];
  hour = 1;
  minute = 0;
  ampm = AMPMEnum.AM;
  ampmEnum = AMPMEnum;

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

  onOpen() {
    this.appendTime();
  }

  private appendTime() {
    const matCalendar = document.getElementsByClassName('mat-datepicker-content-container')[0] as HTMLElement;
    matCalendar.appendChild(this.datepickerTime.nativeElement);
  }

  addEvent(event) {
    console.log(event);
  }

  onDateChange(event) {
    if (event) {
      // if (this.ampm === AMPMEnum.PM && this.hour !== 12) {
      //   this.hour += 12;
      // }
      // const d = new Date(new Date(event).setHours(this.hour)).setMinutes(this.minute);
      // let date = momentJs(momentJs(d).format('MMMM DD YYYY, hh:mm A'));
      this.value = new Date(event).toISOString();
    }
  }

  hourClicked(hour) {
    this.hour = hour
  }

  minuteClicked(minute) {
    this.minute = minute
  }

  ampmClicked(amPm) {
    this.ampm = amPm;
  }
}

export enum AMPMEnum {
  AM = 'AM',
  PM = 'PM',
} 