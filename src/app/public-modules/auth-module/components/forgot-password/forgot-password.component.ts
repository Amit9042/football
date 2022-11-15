import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '@sharedModule/services';
import { AppRegexConstants, RouteConstants, RouteQueryParams } from '@sharedModule/constants';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    forgotPasswordForm: FormGroup;
    forgotPasswordFormFields = ForgotPasswordFormFields;
    constructor(
        private sharedService: SharedService,
        private formBuilder: FormBuilder, private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm(): void {
        this.forgotPasswordForm = this.formBuilder.group({
            [ForgotPasswordFormFields.email]: ['', [Validators.required, Validators.pattern(AppRegexConstants.EMAIL_ADDRESS)]],
        })
    }

    sendEmail() {
        if (this.forgotPasswordForm.invalid) {
            this.forgotPasswordForm.markAllAsTouched();
            return
        }
        const formValue = this.forgotPasswordForm.value;
        const email = formValue.email;
        this.authService.sendEmail(email).then(
            () => {
                // this.sharedService.setToastMsg({
                //     severity: 'success',
                //     detail: 'success',
                // });
                this.router.navigate([`${RouteConstants.RESET_PASSWORD_PATH}`], {
                    queryParams:
                        { [RouteQueryParams.EMAIL]: email }
                });
            }
        )
    }

    public get formControls(): { [key: string]: AbstractControl } {
        return this.forgotPasswordForm.controls;
    }

}

const ForgotPasswordFormFields = {
    email: 'email'
}
