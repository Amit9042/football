import { ChangeDetectorRef, Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppVisibilityConstants } from '@sharedModule/constants';
import { scrollToTop } from '@sharedModule/functions';
import { SharedService } from '@sharedModule/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'football';
  visibility = AppVisibilityConstants.HIDE_HEADER_HIDE_SIDEBAR_SHOW_FOOTER;
  snackBarSubscriber$: Subscription;
  loaderSubscriber$: Subscription;
  loggedInStatusSubscriber$: Subscription;
  showLoader = false;

  panelMove = true;
  isLoggedIn = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService,
    private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.initialize();
  }

  initialize = () => {
    this.subscribeLoader();
    this.subscribeSnackbar();
    this.subscribeLoggedInStatus();
  };

  onActivate() {
    setTimeout(() => { scrollToTop() }, 500);
  }

  subscribeLoggedInStatus = () => {
    this.loggedInStatusSubscriber$ = this.sharedService.getLoggedInUserStatus()
      .subscribe((value) => {
        this.isLoggedIn = value;
      });
  };

  subscribeLoader = () => {
    this.loaderSubscriber$ = this.sharedService.getLoader().subscribe((flag) => {
      console.log(flag, 'flagflagflag');
      this.showLoader = flag;
      this.cdr.detectChanges();
    });
  };

  subscribeSnackbar = () => {
    this.snackBarSubscriber$ = this.sharedService.getSnackBar().subscribe((message) => {
      if (message) {
        this.openSnackBar(message);
      }
    });
  };

  openSnackBar(message: string) {
    console.log(message);
    const configSnackBar = new MatSnackBarConfig();
    configSnackBar.verticalPosition = 'top';
    configSnackBar.horizontalPosition = 'right';
    configSnackBar.duration = 999999999999999;
    configSnackBar.panelClass = ['snackbar'];
    this.snackBar.open(message, 'Close', configSnackBar);
  }

  ngOnDestroy(): void {
    this.snackBarSubscriber$?.unsubscribe();
    this.loaderSubscriber$?.unsubscribe();
    this.loggedInStatusSubscriber$?.unsubscribe();
  }
}
