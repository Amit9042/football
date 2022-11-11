import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppVisibilityConstants, RoutePathConstants } from '@sharedModule/constants';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: RoutePathConstants.EMPTY, redirectTo: `${RoutePathConstants.LOGIN}`, pathMatch: RoutePathConstants.FULL_PATH_MATCH },
  {
    path: RoutePathConstants.LOGIN, component: LoginComponent,
    data: {
      visibility: AppVisibilityConstants.HIDE_HEADER_HIDE_SIDEBAR_HIDE_FOOTER
    },
  },
  {
    path: RoutePathConstants.REGISTER, component: SignupComponent,
    data: {
      visibility: AppVisibilityConstants.HIDE_HEADER_HIDE_SIDEBAR_HIDE_FOOTER
    },
  },
  {
    path: RoutePathConstants.VERIFY_EMAIL, component: VerifyEmailComponent,
    data: {
      visibility: AppVisibilityConstants.HIDE_HEADER_HIDE_SIDEBAR_HIDE_FOOTER
    },
  },
  {
    path: RoutePathConstants.RESET_PASSWORD, component: ResetPasswordComponent,
    data: {
      visibility: AppVisibilityConstants.HIDE_HEADER_HIDE_SIDEBAR_HIDE_FOOTER
    },
  },
  {
    path: RoutePathConstants.FORGOT_PASSWORD, component: ForgotPasswordComponent,
    data: {
      visibility: AppVisibilityConstants.HIDE_HEADER_HIDE_SIDEBAR_HIDE_FOOTER
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
