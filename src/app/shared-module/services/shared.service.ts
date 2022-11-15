import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EncryptionFunctions } from '@sharedModule/functions';
import { AppStorageConstants, RouteConstants } from '@sharedModule/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private initiateSnackBar: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private isLoggedInUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}
  
  // To get & set loader status
  getLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setLoader(val: boolean): void {
    console.log(val, 'setLoader');

    this.isLoading.next(val);
  }

  // To get & set toast message
  getSnackBar(): Observable<string> {
    return this.initiateSnackBar.asObservable();
  }

  setSnackBar(val: string): void {
    this.initiateSnackBar.next(val);
  }

  // To get & set loggedin status
  getLoggedInUserStatus() {
    if (!this.isLoggedInUser.value) {
      this.isLoggedInUser.next(
        EncryptionFunctions.DECRYPT_OBJ(
          localStorage.getItem(AppStorageConstants.LOGIN_STATUS),
          AppStorageConstants.LOGIN_STATUS
        )
      );
    }
    return this.isLoggedInUser.asObservable();
  }

  setLoggedInUserStatus(value: boolean) {
    localStorage.setItem(
      AppStorageConstants.LOGIN_STATUS,
      EncryptionFunctions.ENCRYPT_OBJ(value)
    );
    this.isLoggedInUser.next(value);
  }

  logout() {
    // TO DO
    this.setLoggedInUserStatus(false);
    this.router.navigate([`/${RouteConstants.LOGIN_PATH}`]);
  }
}
