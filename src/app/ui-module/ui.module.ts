import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIButtonComponent, UIChipsComponent, UIConfirmAlertComponent, UIDatePickerComponent, UIDropdownComponent, UIFieldErrorComponent, UiImgCropperComponent, UIInputComponent, UIInputSwitchComponent, UIMandateComponent, UINumberComponent, UIPlaceComponent, UISquareComponent, UITagComponent, UITextareaCompoent } from "@uiModule/components";
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    DropdownModule,
    InputSwitchModule,
    RadioButtonModule,
    CheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    ImageCropperModule,
  ],
  declarations: [UIInputComponent, UISquareComponent,
    UIChipsComponent,
    UIDropdownComponent,
    UITextareaCompoent,
    UIInputSwitchComponent,
    UINumberComponent,
    UIButtonComponent,
    UIMandateComponent,
    UIDatePickerComponent,
    UIPlaceComponent,
    UITagComponent, UIConfirmAlertComponent,
    UIFieldErrorComponent, UiImgCropperComponent,
  ],
  exports: [UIInputComponent, UISquareComponent,
    UIChipsComponent, UIDropdownComponent,
    UITextareaCompoent, UIInputSwitchComponent,
    UINumberComponent,
    UIButtonComponent,
    UIMandateComponent, UIDatePickerComponent,
    UITagComponent,
    UIPlaceComponent, UIConfirmAlertComponent,
    UIFieldErrorComponent, UiImgCropperComponent,
  ]
})
export class UIModule { }
