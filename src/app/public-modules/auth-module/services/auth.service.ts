import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { SignupModel } from '../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(loginModel: LoginModel): Observable<any> {
    return of(loginModel);
    // return Auth.signIn(loginModel.username, loginModel.password)
  }

  signup(signupData: SignupModel): Promise<any> {
    return '' as any;
    /* Auth.signUp({
      username: signupData.username,
      password: signupData.password,
      attributes: {
        locale: signupData.communicationLang, // user locale = browser locale, different from mainLanguage in org. In ISO format
        given_name: signupData.firstname,
        family_name: signupData.lastname,
      }
    }) */
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
