import { Injectable } from '@angular/core';
import { APIConstants, HttpMethodsTypeEnum } from '@sharedModule/constants';
import { APIManager } from '@sharedModule/services';
import { UserModel } from '@userModule/models';
import { LoginModel } from '@authModule/models';
import { delay, map, Observable, of } from 'rxjs';
import { UserService } from '@userModule/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiManager: APIManager, private userService: UserService) { }

  login(loginModel: LoginModel): Observable<UserModel | undefined> {
    return this.userService.getUserList().pipe(
      map((uList: UserModel[]) => {
        const user = uList.find(user =>
          user?.user_name?.toLowerCase() === loginModel.user_name.toLowerCase() &&
          user?.password?.toLowerCase() === loginModel.password.toLowerCase(),
        );
        return user
      })
    )
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
