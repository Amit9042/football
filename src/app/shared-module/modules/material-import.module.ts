import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,

  ],
  declarations: [],
  exports: [
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
  ]
})
export class MaterialImportModule { }
