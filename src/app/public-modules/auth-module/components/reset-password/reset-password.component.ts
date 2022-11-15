import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteConstants, RouteQueryParams } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';
import { AuthValidationConstants } from '../../constants/auth.validation';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  resetPasswordFormFields = ResetPasswordFormFields;
  routes = RouteConstants;
  email: string;

  constructor(
    private sharedService: SharedService,
    private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router, private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .subscribe((paramMap) => {
        if (paramMap.has(RouteQueryParams.EMAIL)) {
          const emailValue = paramMap.get(RouteQueryParams.EMAIL);
          this.email = emailValue || '';
        } else {
          this.router.navigate([RouteConstants.REGISTER_PATH]);
        }
      });
    this.initializeForm();
  }

  initializeForm() {
    this.resetPasswordForm = this.formBuilder.group({
      [ResetPasswordFormFields.password]: ['', AuthValidationConstants.PASSWORD_VALIDATION],
      [ResetPasswordFormFields.confirmPassword]: ['', Validators.required],
      [ResetPasswordFormFields.validationCode]: ['', Validators.required],

    }, { validator: this.checkPasswrodValidation })
  }


  checkPasswrodValidation(resetPasswordForm: FormGroup): { [key: string]: any } | null {
    const password = resetPasswordForm.controls[ResetPasswordFormFields.password].value;
    const confirmPassword = resetPasswordForm.controls[ResetPasswordFormFields.confirmPassword].value;
    if ((password || confirmPassword) && confirmPassword !== password) {
      return { passwordMismatch: true };
    }
    return null;
  }

  resetPassword() {
    if (this.resetPasswordForm.invalid) {
      this.resetPasswordForm.markAllAsTouched();
      return
    }
    const formValue = this.resetPasswordForm.value;
    formValue[ResetPasswordFormFields.email] = this.email;
    this.authService.forgotPasswordSubmit(formValue)
    .then(
      () => {
        // this.sharedService.setToastMsg({
        //   severity: 'success',
        //   detail: 'success',
        // });
        this.router.navigate([`/${RouteConstants.LOGIN_PATH}`]);
      },
    )
    .catch(
      (error) => {
        this.sharedService.setSnackBar('error');
        console.error(error);
      }
    );
  }

  public get formControls(): { [key: string]: AbstractControl } {
    return this.resetPasswordForm.controls;
  }

}

export const ResetPasswordFormFields = {
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
  validationCode: 'validationCode'
}
