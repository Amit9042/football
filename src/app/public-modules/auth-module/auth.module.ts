import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {
    LoginComponent,
    SignupComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
} from "@authModule/components";
import { SharedModule } from "@sharedModule/shared.module";

@NgModule({
    declarations: [LoginComponent, SignupComponent, VerifyEmailComponent,
        ResetPasswordComponent, ForgotPasswordComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
    ],
})
export class AuthModule {
}
