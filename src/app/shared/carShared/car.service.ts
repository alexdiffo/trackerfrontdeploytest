import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Car } from './car.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  selectedCar: Car = {
    matriculation: '',
    brand : '',
    fleet: JSON.parse(localStorage.getItem('fleetData'))['_id']
    
  };
  constructor(private http: HttpClient) { } 

  postCar(car: Car){
    return this.http.post(environment.apiBaseUrl+'/newCar',car);
  }

  getCars() {
    return this.http.get(environment.apiBaseUrl + '/car');
  }

}
