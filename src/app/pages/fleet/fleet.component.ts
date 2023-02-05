import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetService } from '../../shared/fleetShared/fleet.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})

export class FleetComponent implements OnInit {
  fleets;
  constructor(public fleetService: FleetService ,private router: Router) { }

  ngOnInit() {
    this.fleetService.getFleets().subscribe(
      res => {
        this.fleets = res;
        
      },
      err => {
        console.log(err);
      }
    );
  }

  getCurrentFleet(fleetDetails){
    localStorage.setItem('fleetData', JSON.stringify(fleetDetails))
    //console.log(fleet)
  }
}
