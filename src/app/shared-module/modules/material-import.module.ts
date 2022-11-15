import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
  declarations: [],
  exports: [
    MatSnackBarModule,
    MatProgressBarModule,
  ]
})
export class MaterialImportModule { }
