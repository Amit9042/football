import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [
    // added because need to use component as modal and also eith routing
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class MaterialImportModule { }
