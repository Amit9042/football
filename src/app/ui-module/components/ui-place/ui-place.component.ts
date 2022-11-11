import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
declare var google: any;

export const PLACE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UIPlaceComponent),
  multi: true
};

@Component({
  selector: 'ui-place',
  template: `
  <input [disabled]="disabled" [placeholder]="placeholder" type="text"
    class="ui-place-input" [value]="address"
     #uiPlaceAutocompleteField>
  `,
  styleUrls: [`./ui-place.component.scss`],
  providers: [PLACE_VALUE_ACCESSOR],
})

export class UIPlaceComponent implements ControlValueAccessor {

  @Input() placeholder = '';
  @Input() disabled = false;
  @ViewChild('uiPlaceAutocompleteField') uiPlaceAutocompleteField: any;

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

  constructor(
  ) { }

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

  ngAfterViewInit(): void {
    this.initPlaceAutocomplete();
  }

  private initPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.uiPlaceAutocompleteField.nativeElement, {
      componentRestrictions: { country: 'CA' },
      types: ['address']  // 'establishment' / 'address' / 'geocode'
    });
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      let address;// new AddressModel();
      const streetNumber = place.address_components.find(it => it.types.indexOf('street_number') > -1);
      if (streetNumber) {
        address.line1 = streetNumber.long_name + ' ' + place.address_components.find(it => it.types.indexOf('route') > -1).long_name;
      } else {
        address.line1 = place.address_components.find(it => it.types.indexOf('route') > -1).long_name;
      }
      address.city = place.address_components.find(it => it.types.indexOf('locality') > -1).long_name;
      address.zip = place.address_components.find(it => it.types.indexOf('postal_code') > -1).long_name;
      address.state = place.address_components.find(it => it.types.indexOf('administrative_area_level_1') > -1).long_name;
      address.country = place.address_components.find(it => it.types.indexOf('country') > -1).long_name;
      address.latitude = place.geometry.location.lat();
      address.longitude = place.geometry.location.lng();
      this.value = address;
    });
  }

  public get address(): string {
    if (this.value) {
      return this.value.line1 + ' ' + this.value.city + ' ' + this.value.state + ' ' + this.value.zip;
    }
    return ''
  }
}
