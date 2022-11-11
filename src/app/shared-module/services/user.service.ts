import { Injectable } from "@angular/core";
import { UserModel } from "@sharedModule/models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userModel: UserModel;
}
