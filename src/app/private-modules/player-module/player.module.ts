import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@sharedModule/shared.module';
import { AddEditPlayerComponent, PlayerListComponent } from '@playerModule/components';
import { PlayerRoutingModule } from './player-routing.module';

@NgModule({
  declarations: [
    PlayerListComponent, AddEditPlayerComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    SharedModule,
  ]
})
export class PlayerModule { }
