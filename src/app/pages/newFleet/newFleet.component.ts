import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FleetService } from 'src/app/shared/fleetShared/fleet.service';

@Component({
  selector: 'app-newFleet',
  templateUrl: './newFleet.component.html',
  styleUrls: ['./newFleet.component.scss']
})
export class NewFleetComponent implements OnInit {
  userDetails;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public fleetService: FleetService,private router : Router) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userData'))
  }
  onSubmit(form: NgForm) {
    this.fleetService.postFleet(form.value).subscribe(
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
