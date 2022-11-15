import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private initiateSnackBar: BehaviorSubject<string> = new BehaviorSubject<string>('');

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
}
