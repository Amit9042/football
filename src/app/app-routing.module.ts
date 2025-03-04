import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@authModule/components';
import { RoutePathConstants } from '@sharedModule/constants';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: RoutePathConstants.EMPTY, redirectTo: `${RoutePathConstants.AUTH}`, pathMatch: RoutePathConstants.FULL_PATH_MATCH },
  {
    path: RoutePathConstants.HOME, component: HomeComponent
  },
  {
    path: RoutePathConstants.AUTH, loadChildren: () => import('./public-modules/auth-module/auth.module').then(m => m.AuthModule)
  },
  {
    path: RoutePathConstants.USER, loadChildren: () => import('./private-modules/user-module/user.module').then(m => m.UserModule)
  },
  {
    path: RoutePathConstants.PLAYER, loadChildren: () => import('./private-modules/player-module/player.module').then(m => m.PlayerModule)
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
