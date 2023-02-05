import { Component, OnInit } from '@angular/core';
import { CarService } from '../../shared/carShared/car.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  fleetDetails
  cars
  constructor(public carService: CarService ,private router: Router) { }

  ngOnInit(){
    this.fleetDetails = JSON.parse(localStorage.getItem('fleetData'));
    this.carService.getCars().subscribe(
      res => {
        this.cars = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
