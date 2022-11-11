import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants, AppRegexConstants, RouteConstants, RouteQueryParams } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';
import { AuthValidationConstants } from '../../constants/auth.validation';
import { SignupFormFields, SignupModel } from '../../models/signup.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupFormFields = SignupFormFields;
  routes = RouteConstants;

  constructor(
    private sharedService: SharedService,
    private router: Router, private formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.signupForm = this.formBuilder.group({
      [SignupFormFields.firstname]: ['', [Validators.required]],
      [SignupFormFields.lastname]: ['', [Validators.required]],
      [SignupFormFields.username]: ['', [Validators.required, Validators.pattern(AppRegexConstants.EMAIL_ADDRESS)]],
      [SignupFormFields.password]: ['', AuthValidationConstants.PASSWORD_VALIDATION],
      [SignupFormFields.confirmPassword]: ['', Validators.required],
      [SignupFormFields.communicationLang]: [null, [Validators.required]],
      [SignupFormFields.termsAndCondition]: [false, [Validators.requiredTrue]],
      [SignupFormFields.privacyPolicy]: [false, [Validators.requiredTrue]],
    }, { validator: this.checkPasswrodValidation })
  }

  checkPasswrodValidation(signupForm: FormGroup): { [key: string]: any } | null {
    const password = signupForm.controls[SignupFormFields.password].value;
    const confirmPassword = signupForm.controls[SignupFormFields.confirmPassword].value;
    if ((password || confirmPassword) && confirmPassword !== password) {
      return { passwordMismatch: true };
    }
    return null;
  }

  goToVerifyEmail() {
    const json = {
      [RouteQueryParams.EMAIL]: this.email
    };
    this.router.navigate([RouteConstants.VERIFY_EMAIL_PATH], { queryParams: json });
  }

  onSignup() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    if (this.signupForm.valid) {
      const formValue: SignupModel = this.signupForm.value;
      const signupPromise = this.authService.signup(formValue);
      signupPromise.then(result => {
        this.sharedService.setToastMsg({
          severity: 'success',
          detail: 'success',
        });
        this.goToVerifyEmail();
      })
      signupPromise.catch(error => {
        this.sharedService.setToastMsg({
          severity: 'error',
          detail: error.message
        });
        console.error('error signing up:', error);
      });
    }
  }

  public get formControls(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  public get email(): string {
    return this.formControls[SignupFormFields.username].value;
  }
}
