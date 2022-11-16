import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerFormFields, PlayerModalParams, PlayerModel } from '@playerModule/models';
import { PlayerService } from '@playerModule/services';
import { RouteConstants } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';
@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.scss']
})
export class AddEditPlayerComponent implements OnInit {

  playerForm: FormGroup;
  playerFormFields = PlayerFormFields;
  routes = RouteConstants;
  playerModel: PlayerModel;
  clubList = [
    {
      label_en: 'Club 1',
      label_fr: 'Club 1',
      value: 1
    },
    {
      label_en: 'Club 2',
      label_fr: 'Club 2',
      value: 2
    }
  ]

  constructor(
    public dialogRef: MatDialogRef<AddEditPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public playerModalParams: PlayerModalParams,
    private sharedService: SharedService,
    private playerService: PlayerService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initializeForm();
    if (this.playerModalParams.id) {
      this.getPlayerDetail();
    }
  }

  getPlayerDetail() {
    this.playerService.getPlayerById(this.playerModalParams.id).subscribe(playerModel => {
      this.playerModel = playerModel;
      this.fillForm();
    })
  }

  fillForm() {
    this.playerForm.reset(this.playerModel);
  }

  initializeForm() {
    this.playerForm = this.formBuilder.group({
      [PlayerFormFields.id]: [null],
      [PlayerFormFields.first_name]: ['', [Validators.required]],
      [PlayerFormFields.last_name]: ['', [Validators.required]],
      [PlayerFormFields.name]: ['', [Validators.required]],
      [PlayerFormFields.age]: ['', [Validators.required]],
      [PlayerFormFields.height]: ['', [Validators.required]],
      [PlayerFormFields.image]: [''],
      [PlayerFormFields.nationality]: ['', [Validators.required]],
      [PlayerFormFields.position]: ['', [Validators.required]],
      [PlayerFormFields.price]: ['', [Validators.required]],
      [PlayerFormFields.club_id]: ['', [Validators.required]],
    })
  }

  saveOrUpdatePlayer() {
    if (this.playerForm.invalid) {
      this.playerForm.markAllAsTouched();
      return;
    }
    if (this.playerForm.valid) {
      const formValue: PlayerModel = this.playerForm.value;
      if (formValue.id) {
        this.playerService.updatePlayer(formValue).subscribe((response) => {
          this.closeModal(formValue);
          this.sharedService.setSnackBar("Player updated successfully");
        })
      } else {
        this.playerService.addPlayer(formValue).subscribe((response) => {
          this.closeModal(formValue);
          this.sharedService.setSnackBar('Player created successfully');
        })
      }
    }
  }

  closeModal(playerModel) {
    this.dialogRef.close(playerModel);
  }

  close() {
    this.dialogRef.close();
  }

  public get formControls(): { [key: string]: AbstractControl } {
    return this.playerForm.controls;
  }
}
