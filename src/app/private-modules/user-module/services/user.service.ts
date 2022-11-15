import { Injectable } from "@angular/core";
import { UserModel } from "@userModule/models";
import { APIConstants, HttpMethodsTypeEnum } from "@sharedModule/constants";
import { APIManager } from "@sharedModule/services";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiManager: APIManager
  ) { }

  private userModel: UserModel;


  getUserList() {
    return this.apiManager.httpHelperMethod(
      HttpMethodsTypeEnum.GET,
      APIConstants.USER_LIST,
    );
  }
}
