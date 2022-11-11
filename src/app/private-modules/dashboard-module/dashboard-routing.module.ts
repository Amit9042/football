import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppVisibilityConstants, RoutePathConstants } from '@sharedModule/constants';
import { DashboardComponent } from './components/dashboard.component';

const routes: Routes = [
  {
    path: RoutePathConstants.EMPTY, component: DashboardComponent,
    data: {
      visibility: AppVisibilityConstants.SHOW_HEADER_HIDE_SIDEBAR_HIDE_FOOTER
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
