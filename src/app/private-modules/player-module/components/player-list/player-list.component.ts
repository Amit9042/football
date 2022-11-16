import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayerColumns, PlayerColumnsList } from '@playerModule/constants';
import { PlayerModalParams, PlayerModel } from '@playerModule/models';
import { PlayerService } from '@playerModule/services';
import { AppConstants } from '@sharedModule/constants';
import { primengSortingFunction } from '@sharedModule/functions';
import { SharedService } from '@sharedModule/services';
import { ConfirmAlertParams, UIConfirmAlertComponent } from '@uiModule/components';
import { Table } from 'primeng/table';
import { AddEditPlayerComponent } from '../add-edit-player/add-edit-player.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  playerList: PlayerModel[] = [];
  columnsArray = PlayerColumnsList;
  columnNames = PlayerColumns;
  appConst = AppConstants;
  @ViewChild('playerTable', { static: false }) playerTable: Table;

  constructor(private playerService: PlayerService,
    private sharedService: SharedService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPlayerList();
  }

  getPlayerList() {
    this.playerService.getPlayerList().subscribe((ulist) => {
      this.playerList = ulist.map(e => {
        return {
          id: e.id,
          age: e.age,
          first_name: e.first_name,
          height: e.height,
          image: e.image,
          last_name: e.last_name,
          name: e.name,
          nationality: e.nationality,
          position: e.position,
          price: e.price,
          club_id: e.club_id
        }
      });
    });
  }

  openPlayerModal(id = '') {
    const json: PlayerModalParams = {
      id: id,
    }
    let dialogRef = this.matDialog.open(AddEditPlayerComponent, {
      panelClass: ['width_50', 'right-modal', 'content_pad_0', 'animate__animated', 'animate__slideInRight'],
      position: { right: '0', top: '0' },
      data: json,
      height: '100%',
      minHeight: '100%'
    })
    dialogRef.afterClosed().subscribe((playerModel: PlayerModel) => {
      if (playerModel) {
        this.getPlayerList();
      }
    });
  } 

  deletePlayer(id) {
    let dialogRef = this.matDialog.open(UIConfirmAlertComponent, {
      panelClass: ['ui-confirm-alert-container'],
      data: {
        text: 'Are you sure to want proceed ?',
        subText: 'Player will be deleted',
      }
    })
    dialogRef.afterClosed().subscribe((confirmAlertParams: ConfirmAlertParams) => {
      if (confirmAlertParams?.action === AppConstants.ACCEPT) {
        this.callDeleteAPI(id)
      }
    });
  }

  callDeleteAPI(id) {
    this.playerService.deletePlayer(id).subscribe(ulist => {
      this.sharedService.setSnackBar('Player Deleted Successfully');
      this.getPlayerList();
    })
  }

  customSort(event) {
    if (this.playerTable) {
      this.playerTable.value.sort(primengSortingFunction(event));
    }
  }
}

