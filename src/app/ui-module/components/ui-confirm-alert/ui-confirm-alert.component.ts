import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConstants } from '@sharedModule/constants';

@Component({
  selector: 'ui-confirm-alert',
  templateUrl: './ui-confirm-alert.component.html',
  styleUrls: ['./ui-confirm-alert.component.scss']
})
export class UIConfirmAlertComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UIConfirmAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public alertData: ConfirmAlertParams) {
  }

  ngOnInit(): void {
  }

  reject(): void {
    const json: ConfirmAlertParams = {
      action: AppConstants.REJECT,
    };
    this.closeDialog(json);
  }

  accept(): void {
    const json: ConfirmAlertParams = {
      action: AppConstants.ACCEPT,
    };
    this.closeDialog(json);
  }

  closeDialog(json: ConfirmAlertParams): void {
    this.dialogRef.close(json);
  }

  close() {
    this.dialogRef.close();
  }
}

export interface ConfirmAlertParams {
  svgIcon?: any;
  text?: any;
  subText?: any;
  action?: string;
}
