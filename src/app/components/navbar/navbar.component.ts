import {
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppConstants, RouteConstants } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    @ViewChild('sideBarContainer', { static: true }) sideBarContainer: any;
    // Data variables
    routeConstant = RouteConstants;

    // Input and Ouptut methods
    @Output() menuClick = new EventEmitter<boolean>();

    // State Variables
    isSmallSidebar = true;
    isShowDropdown = false;
    isDialogOpen = false;
    mediaQuery = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
    currentRoute


    constructor(private sharedService: SharedService,
        private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
        fromEvent(this.sideBarContainer.nativeElement, AppConstants.MOUSE_LEAVE_EVENT).subscribe(() => {
            this.toggleMenu(true);
        });
        fromEvent(this.sideBarContainer.nativeElement, AppConstants.MOUSE_ENTER_EVENT).subscribe(() => {
            this.toggleMenu(false);
        });
    }

    getCurrentRoute = () => {
        this.router.events.subscribe((res) => {
            this.currentRoute = this.router.url;
        });
    };

    toggleMenu = (value) => {
        this.isSmallSidebar = value;
        this.menuClick.emit(this.isSmallSidebar);
    };


    onLogOut = () => {
        this.sharedService.logout();
        this.clearSub();
    };

    onSidebarCollapse = () => {
        this.isSmallSidebar = !this.isSmallSidebar;
        this.menuClick.emit(this.isSmallSidebar);
    };


    onRedirectToRoute = (route: string) => {
        if (this.mediaQuery.matches) {
            this.isSmallSidebar = true;
        }
        this.router.navigate(['/' + route]);
    };


    onError = (event) => {
        event.target.src = 'assets/images/svg_files/userProfile.svg';
    };

    ngOnDestroy() {
        this.clearSub();
    }

    clearSub = () => {
    };

    isRouteActive = (route: string) => {
        route = route.split('?')[0];
        if (route.endsWith('/')) {
            route = route.substring(0, route.length - 1);
        }
        return route === this.currentRoute;
    };

    logout() {
        this.sharedService.logout();
    }
}
