import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '@authModule/components';
import { SignupParams } from '@authModule/models';
import { AppConstants } from '@sharedModule/constants';
import { primengSortingFunction } from '@sharedModule/functions';
import { SharedService } from '@sharedModule/services';
import { ConfirmAlertParams, UIConfirmAlertComponent } from '@uiModule/components';
import { UserColumns, UserColumnsList } from '@userModule/constants';
import { UserModel } from '@userModule/models';
import { UserService } from '@userModule/services';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: UserModel[] = [];
  columnsArray = UserColumnsList;
  columnNames = UserColumns;
  appConst = AppConstants;
  @ViewChild('userTable', { static: false }) userTable: Table;

  constructor(private userService: UserService,
    private sharedService: SharedService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUserList().subscribe((ulist) => {
      this.userList = ulist.map(e => {
        return {
          first_name: e.first_name,
          last_name: e.last_name,
          user_name: e.user_name,
          email: e.email,
          id: e.id,
        }
      });
    });
  }

  openUserModal(id = '') {
    const json: SignupParams = {
      id: id,
      isModal: true
    }
    let dialogRef = this.matDialog.open(SignupComponent, {
      panelClass: ['width_40', 'right-modal', 'content_pad_0', 'animate__animated', 'animate__slideInRight'],
      position: { right: '0', top: '0' },
      data: json,
    })
    dialogRef.afterClosed().subscribe((userModel: UserModel) => {
      if (userModel) {
        this.getUserList();
      }
    });
  }

  deleteUser(id) {
    let dialogRef = this.matDialog.open(UIConfirmAlertComponent, {
      panelClass: ['ui-confirm-alert-container'],
      data: {
        text: 'Are you sure to want proceed ?',
        subText: 'User will be deleted',
      }
    })
    dialogRef.afterClosed().subscribe((confirmAlertParams: ConfirmAlertParams) => {
      if (confirmAlertParams?.action === AppConstants.ACCEPT) {
        this.callDeleteAPI(id)
      }
    });
  }

  callDeleteAPI(id) {
    this.userService.deleteUser(id).subscribe(ulist => {
      this.sharedService.setSnackBar('User Deleted Successfully');
      this.getUserList();
    })
  }

  customSort(event) {
    if (this.userTable) {
      this.userTable.value.sort(primengSortingFunction(event));
    }
  }
}

