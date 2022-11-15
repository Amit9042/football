import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathConstants } from '@sharedModule/constants';
import { UserListComponent } from './components';

const routes: Routes = [
  { path: RoutePathConstants.EMPTY, redirectTo: `${RoutePathConstants.LIST}`, pathMatch: RoutePathConstants.FULL_PATH_MATCH },
  {
    path: RoutePathConstants.LIST, component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
