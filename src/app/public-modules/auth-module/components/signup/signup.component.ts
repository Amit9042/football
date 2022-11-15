import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteConstants } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';
import { UserFormFields, UserModel } from '@userModule/models';
import { AuthValidationConstants } from '../../constants/auth.validation';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupFormFields = UserFormFields;
  routes = RouteConstants;

  constructor(
    private sharedService: SharedService,
    private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.signupForm = this.formBuilder.group({
      [UserFormFields.id]: [null],
      [UserFormFields.first_name]: ['', [Validators.required]],
      [UserFormFields.last_name]: ['', [Validators.required]],
      [UserFormFields.user_name]: ['', [Validators.required]],
      [UserFormFields.password]: ['', AuthValidationConstants.PASSWORD_VALIDATION],
      [UserFormFields.confirmPassword]: ['', Validators.required],
    }, { validator: this.checkPasswrodValidation })
  }

  checkPasswrodValidation(signupForm: FormGroup): { [key: string]: any } | null {
    const password = signupForm.controls[UserFormFields.password].value;
    const confirmPassword = signupForm.controls[UserFormFields.confirmPassword].value;
    if ((password || confirmPassword) && confirmPassword !== password) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSignup() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    if (this.signupForm.valid) {
      const formValue: UserModel = this.signupForm.value;
      console.log(formValue);
      this.authService.signup(formValue).subscribe(() => {
        this.sharedService.setSnackBar('success');
        this.redirectToLogin();
      })
    }
  }

  redirectToLogin() {
    this.router.navigate([RouteConstants.LOGIN_PATH]);
  }

  public get formControls(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  public get email(): string {
    return this.formControls[UserFormFields.user_name].value;
  }
}
