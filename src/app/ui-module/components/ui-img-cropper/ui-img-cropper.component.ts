import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

export const UI_IMG_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiImgCropperComponent),
  multi: true
};

@Component({
  selector: 'ui-img-cropper',
  template: `
    <div class="ui-img-cropper">
      <input #fileupload type="file" (change)="fileChangeEvent($event)" />
      <image-cropper *ngIf="croppingInProgress" [imageChangedEvent]="imageChangedEvent" [maintainAspectRatio]="true" [aspectRatio]="4 / 3" format="png"
        (imageCropped)="imageCropped($event)" (imageLoaded)="imageLoaded($event)" (cropperReady)="cropperReady()"
        (loadImageFailed)="loadImageFailed()"></image-cropper>
        <ng-container *ngIf="croppingInProgress" >
          <button class="btn accept-btn" (click)="completeCropping()">Accept</button>
          <button class="btn reject-btn" (click)="cancelCropping()">Discard</button>
        </ng-container>
        <img [src]="croppedImage" *ngIf="croppedImage && !croppingInProgress">
    </div>
  `,
  styleUrls: ['./ui-img-cropper.component.scss'],
  providers: [UI_IMG_VALUE_ACCESSOR]
})
export class UiImgCropperComponent implements OnInit, ControlValueAccessor {

  /* CUSTOM */
  croppingInProgress = false;
  imageUploadError = null;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  /* CUSTOM */
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
    this.croppedImage = obj;
    if (obj) {
      this.completeCropping();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }



  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.croppingInProgress = true;
    this.imageUploadError = null;
  }
  
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.value = this.croppedImage;
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }


  cancelCropping() {
    this.croppingInProgress = false;
  }

  completeCropping() {
    this.croppingInProgress = false;
  }
}
