import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '@sharedModule/services';
import { RouteConstants, RouteQueryParams } from '@sharedModule/constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  validationCode = new FormControl('', [Validators.required]);
  email = new FormControl('');

  constructor(
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private authService: AuthService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe((paramMap) => {
        if (paramMap.has(RouteQueryParams.EMAIL)) {
          const emailValue = paramMap.get(RouteQueryParams.EMAIL);
          this.email.setValue(emailValue);
        } else {
          this.router.navigate([RouteConstants.REGISTER_PATH]);
        }
      });
  }

  validateCode() {
    if (this.validationCode.invalid) {
      this.validationCode.markAsTouched();
      return;
    }
    const confirmSignup = this.authService.confirmSignup(this.email.value, this.validationCode.value);
    confirmSignup.then(() => {
      this.sharedService.setToastMsg({
        severity: 'success',
        detail: 'success',
      });
      this.redirectToPath(RouteConstants.LOGIN_PATH);
    })
    confirmSignup.catch(error => {
      this.sharedService.setToastMsg({
        severity: 'error',
        detail: error.message
      });
      console.error('error confirming signing up:', error);
    });
  }

  redirectToPath(path: string) {
    this.router.navigate([path]);
  }
}
