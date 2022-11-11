import { Component } from '@angular/core';
import { scrollToTop } from '@sharedModule/functions';
import { AppVisibilityConstants } from '@sharedModule/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'football';
  visibility = AppVisibilityConstants.HIDE_HEADER_HIDE_SIDEBAR_SHOW_FOOTER;


  onActivate() {
    setTimeout(() => {
      scrollToTop()
    }, 500);
  }
}
