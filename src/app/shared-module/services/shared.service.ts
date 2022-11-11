import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private initiateToast: BehaviorSubject<any> = new BehaviorSubject<any>({});

  // To get & set loader status
  getLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setLoader(val: boolean): void {
    this.isLoading.next(val);
  }

  // To get & set toast message
  getToastMsg(): Observable<any> {
    return this.initiateToast.asObservable();
  }

  setToastMsg(message: any): void {
    this.initiateToast.next(message);
  }
}
