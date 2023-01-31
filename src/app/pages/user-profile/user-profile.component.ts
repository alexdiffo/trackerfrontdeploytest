import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFull } from '../../shared/userFull.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userDetails;
  userImage;
  userImageStatus;
  userImageName;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  updateProfile: UserFull;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneNumberRegex = /^6[0-9]{8}$/;

  constructor(public userService: UserService,private router : Router) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    this.load("assets/img/theme/default-avatar.png", false)

    this.updateProfile = {
      _id: this.userDetails._id,
      firstName: this.userDetails.firstName,
      lastName: this.userDetails.lastName,
      emailAddress: this.userDetails.emailAddress,
      phoneNumber: this.userDetails.phoneNumber,
      image: this.userDetails.image,
      address: this.userDetails.address,
      city: this.userDetails.city,
      country: this.userDetails.country,
      aboutMe: this.userDetails.aboutMe
    }
  }

  displayPhoto(event: any){
    this.userImageName = event.target.value.split('\\')[2];
    var file = event.target.files.length;
    for(let i=0;i<file;i++)
    {
       var reader = new FileReader();
       reader.onload = (event:any) => 
       {
           this.userImage = event.target.result;
           //this.changeDetector.detectChanges();
       }
       reader.readAsDataURL(event.target.files[i]);
    }
    this.load(this.userImage, true)
  }

  load(path: any, status: boolean){
    this.updateProfile.image = path;
    this.userImage = path;
    this.userImageStatus = status;
    console.log(this.updateProfile.image);
    
  }

  reset(){
    this.load("assets/img/theme/default-avatar.png", false);
    this.userImageName = undefined;
  }

  onSubmit(form: NgForm) {
    localStorage.setItem('userData', form.value)
    let data = form.value;
    this.verify(data)
    this.userService.updateUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.router.navigate(['/dashboard']);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
          console.log(err);
          
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          console.log(err);
          
      }
    );
  }

  verify(data: {}) {
    for (const prop in data) {
      if (Object.prototype.hasOwnProperty.call(data, prop)) {
        const element = data[prop];
        if(element == undefined){
          delete data[prop]
        }
      }
    }
    console.log(data);
  }
  
  
}
