import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';
import { UserFull } from './userFull.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    password: '',
    image: '../../assets/img/theme/default-avatar.png'
  };
  
  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { } 

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  } 

  updateUser(data) {
    return this.http.post(environment.apiBaseUrl + '/update-user', data);
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  deleteUserData(){
    localStorage.removeItem('userData');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  // encodeImageFileAsURL(file) {
  //   let input = document.createElement('input')
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('value', 'assets/img/theme/default-avatar.png');
  //   input.files[0]
  //   let content = input.files.length;
  //   for(let i=0;i<file;i++)
  //   {
  //      var reader = new FileReader();
  //      reader.onload = (event:any) => 
  //      {
  //          return reader.result;
  //      }
  //      reader.readAsDataURL(input.files[i]);
  //   }
  // }
  

  _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  base64ToBuffer(base64) {
    var dataUrl = "data:application/octet-binary;base64," + base64;
  
    fetch(dataUrl)
      .then(res => res.arrayBuffer())
      .then(buffer => {
        console.log("base64 to buffer: " + new Uint8Array(buffer));
      })
  }
}
