import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

declare interface TableData {
  headerRow: string[];
  dataRows;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public tableTitle : string;

  public tableData1: TableData;
  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        localStorage.setItem('userData', JSON.stringify(this.userDetails))
      },
      err => {
        console.log(err);
        this.userService.deleteToken();
        this.userService.deleteUserData();
      }
    );
    this.tableTitle = "Position History";
      this.tableData1 = {
          headerRow: [ 'Model', 'Matriculation', 'Latitude', 'Longitude'],
          dataRows: [
              {
                ID: '1',
                Model: 'Toyota Avensis',
                Matriculation: 'CE8256',
                Latitude: '10.268',
                Longitude: '36,738'
              },
              {
                ID: '2',
                Model: 'Lexus RX 350',
                Matriculation: 'OU6575',
                Latitude: '80.248',
                Longitude: '23,789'
              },
              {
                ID: '3',
                Model: 'McLaren F1',
                Matriculation: 'LT6547',
                Latitude: '102.68',
                Longitude: '56,142'
              },
              {
                ID: '4',
                Model: 'Mercedes GLC',
                Matriculation: 'AD9875',
                Latitude: '206.254',
                Longitude: '38,735'
              },
              {
                ID: '5',
                Model: 'Mazda CX-5',
                Matriculation: 'OU8754',
                Latitude: '223.254',
                Longitude: '156,735'
              }
          ]
      };
  }

  

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  
}
