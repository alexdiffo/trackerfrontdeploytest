import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(private userService: UserService,location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  userDetails;

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(JSON.stringify(this.userDetails));
        
        localStorage.setItem('userData', JSON.stringify(this.userDetails))
      },
      err => {
        console.log(err);
        // this.userService.deleteToken();
        // this.userService.deleteUserData();
      }
    );
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    setTimeout(() => {
      this.userDetails = JSON.parse(localStorage.getItem('userData'));
    },5)
  }

  onLogout(){
    this.userService.deleteToken();
    this.userService.deleteUserData();
    this.router.navigate(['/login']);
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return '';
  }

}
