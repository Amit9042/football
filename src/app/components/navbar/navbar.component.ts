import {
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouteConstants } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
    // Data variables
    routeConstant = RouteConstants;

    // User Type

    // Input and Ouptut methods
    @Output() menuClick = new EventEmitter<boolean>();

    // State Variables
    isShowMenu = true;
    isShowDropdown = false;
    isDialogOpen = false;
    mediaQuery = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
    currentRoute


    constructor(private sharedService: SharedService,
        private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
    }

    getCurrentRoute = () => {
        this.router.events.subscribe((res) => {
            this.currentRoute = this.router.url;
        });
    };

    onToggleMenu = (menuName) => {
        this.isShowMenu = false;
        this.menuClick.emit(this.isShowMenu);
    };


    onLogOut = () => {
        this.sharedService.logout();
        this.clearSub();
    };

    onSidebarCollapse = () => {
        this.isShowMenu = !this.isShowMenu;
        this.menuClick.emit(this.isShowMenu);
    };

    onShowDropdown = () => {
        this.isShowDropdown = true;
    };

    onHideDropdown = () => {
        this.isShowDropdown = false;
    };

    onCloseNav() {
        if (this.mediaQuery.matches) {
            this.isShowMenu = true;
        }
    }

    onRedirectToRoute = (route: string) => {
        if (this.mediaQuery.matches) {
            this.isShowMenu = true;
        }
        this.router.navigate(['/' + route]);
    };



    onClickOutSide() {
        this.isShowDropdown = false;
    }

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
}
