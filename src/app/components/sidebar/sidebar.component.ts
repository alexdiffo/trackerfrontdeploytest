import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    canActivate;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',       title: 'Dashboard',         icon: 'ni-tv-2 text-primary',       class: '',     canActivate:[AuthGuard] },
    { path: '/fleet',           title: 'Fleet',             icon:'fa-solid fa-bus text-primary',class: '',     canActivate:''},
    // { path: '/icons',           title: 'Icons',             icon:'ni-planet text-primary',        class: '' },
    { path: '/maps',            title: 'Maps',              icon:'ni-pin-3 text-primary',       class: '',     canActivate:'' },
    // { path: '/user-profile',    title: 'User profile',      icon:'ni-single-02 text-yellow',    class: '' },
    { path: '/history',         title: 'History',           icon:'ni-books text-primary',       class: '',     canActivate:'' },
    { path: '/notifications',   title: 'Notification',      icon:'ni-bell-55 text-primary',     class: '',     canActivate:'' },
    // { path: '/login',           title: 'Login',             icon:'ni-key-25 text-info',         class: '' },
    // { path: '/register',        title: 'Register',          icon:'ni-circle-08 text-pink',      class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}