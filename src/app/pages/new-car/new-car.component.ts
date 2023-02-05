import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CarService } from  'src/app/shared/carShared/car.service';


@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {

  fleetDetails;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(public carService: CarService,private router : Router) { }

  ngOnInit() {
    this.fleetDetails = JSON.parse(localStorage.getItem('fleetData'))
  }
  onSubmit(form: NgForm) {
    this.carService.postCar(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.router.navigateByUrl('/fleet');
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
}
