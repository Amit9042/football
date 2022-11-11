import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@authModule/components';
import { RoutePathConstants } from '@sharedModule/constants';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: RoutePathConstants.EMPTY, redirectTo: `${RoutePathConstants.HOME}`, pathMatch: RoutePathConstants.FULL_PATH_MATCH },
  {
    path: RoutePathConstants.HOME, component: LoginComponent
  },
  {
    path: RoutePathConstants.AUTH, loadChildren: () => import('./public-modules/auth-module/auth.module').then(m => m.AuthModule)
  },
  {
    path: RoutePathConstants.DASHBOARD, loadChildren: () => import('./private-modules/dashboard-module/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
