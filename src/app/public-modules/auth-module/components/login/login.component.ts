import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRegexConstants, RouteConstants } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';
import { AuthValidationConstants } from '../../constants/auth.validation';
import { LoginFormFields, LoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  routes = RouteConstants;
  loginForm: FormGroup;
  loginFormFields = LoginFormFields;

  constructor(
    private router: Router, private sharedService: SharedService,
    private authService: AuthService, private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      [LoginFormFields.user_name]: ['', [Validators.required,]], /* Validators.pattern(AppRegexConstants.EMAIL_ADDRESS) */
      [LoginFormFields.password]: ['', AuthValidationConstants.PASSWORD_VALIDATION],
    })
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const formValue: LoginModel = this.loginForm.value;
    this.authService.login(formValue).subscribe((response) => {
      let msg;
      if (response) {
        msg = 'Login Successfully';
        this.redircetToNextPage();
      } else {
        msg = 'Please enter valid credentials';
      }
      this.sharedService.setSnackBar(msg);
    });
  }

  redircetToNextPage() {
    this.router.navigate([RouteConstants.DASHBOARD_PATH])
  }

  goTosignUp() {
    this.router.navigate([RouteConstants.REGISTER_PATH]);
  }

  public get formControls(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
