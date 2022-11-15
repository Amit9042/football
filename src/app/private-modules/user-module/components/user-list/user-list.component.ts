import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupComponent } from '@authModule/components';
import { AppConstants } from '@sharedModule/constants';
import { primengSortingFunction } from '@sharedModule/functions';
import { SharedDialogService } from '@sharedModule/services';
import { UserColumns, UserColumnsList } from '@userModule/constants';
import { UserFormFields, UserModel } from '@userModule/models';
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
    private sharedDialogService: SharedDialogService) { }

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

  openUserModal(id = null) {
    let dialogRef = this.sharedDialogService.openDialog(SignupComponent, {
      panelClass: ['left-modal', 'content_pad_0', 'animate__animated', 'animate__slideInLeft'],
      position: { left: '0', top: '0' },
      data: {
        [UserFormFields.id]: id
      },
    })
    dialogRef.afterClosed().subscribe((userModel: UserModel) => {
      if (userModel) {
        this.getUserList();
      }
    });
  }

  customSort(event) {
    if (this.userTable) {
      this.userTable.value.sort(primengSortingFunction(event));
    }
  }
}

