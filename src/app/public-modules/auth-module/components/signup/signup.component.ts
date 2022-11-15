import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthValidationConstants } from '@authModule/constants';
import { SignupParams } from '@authModule/models';
import { AuthService } from '@authModule/services';
import { AppRegexConstants, RouteConstants } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';
import { UserFormFields, UserModel } from '@userModule/models';
import { UserService } from '@userModule/services';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupFormFields = UserFormFields;
  routes = RouteConstants;
  userModel: UserModel;

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public signupParams: SignupParams,
    private sharedService: SharedService,
    private userService: UserService,
    private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.initializeForm();
    if (this.signupParams.isModal) {
      this.getUserDetail();
    }
  }

  getUserDetail() {
    this.userService.getUserById(this.signupParams.id).subscribe(userModel => {
      this.userModel = userModel;
      this.fillForm();
    })
  }

  fillForm() {
    this.signupForm.reset(this.userModel);
  }

  initializeForm() {
    this.signupForm = this.formBuilder.group({
      [UserFormFields.id]: [null],
      [UserFormFields.first_name]: ['', [Validators.required]],
      [UserFormFields.last_name]: ['', [Validators.required]],
      [UserFormFields.email]: ['', [Validators.required, Validators.pattern(AppRegexConstants.EMAIL_ADDRESS)]],
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
        if (this.signupParams.isModal) {
          this.dialogRef.close(formValue);
        } else {
          this.redirectToLogin();
        }
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
