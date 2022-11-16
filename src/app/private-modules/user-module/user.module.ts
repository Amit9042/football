import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@sharedModule/shared.module';
import { UserListComponent } from '@userModule/components';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
