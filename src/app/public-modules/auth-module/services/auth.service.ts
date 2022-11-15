import { Injectable } from '@angular/core';
import { APIConstants, HttpMethodsTypeEnum } from '@sharedModule/constants';
import { APIManager } from '@sharedModule/services';
import { UserModel } from '@userModule/models';
import { LoginModel } from '@authModule/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiManager: APIManager
  ) { }

  login(loginModel: LoginModel): Observable<any> {
    return of(loginModel);
    // return Auth.signIn(loginModel.username, loginModel.password)
  }

  signup(userModel: UserModel): Observable<any> {
    return this.apiManager.httpHelperMethod(
      HttpMethodsTypeEnum.POST,
      APIConstants.SIGN_UP,
      userModel
    );
  }

  confirmSignup(username: string | any, code: string | any): Promise<any> {
    return '' as any;
    // return Auth.confirmSignUp(username, code);
  }

  sendEmail(email: string) {
    return '' as any;
    // return Auth.forgotPassword(email);
  }


  forgotPasswordSubmit({ email, validationCode, password }) {
    return '' as any;
    // return Auth.forgotPasswordSubmit(email, validationCode, password);
  }

  getcurrentAuthenticatedUser() {
    return '' as any;
    // return  Auth.currentAuthenticatedUser();
  }
}
