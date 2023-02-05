import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Fleet } from './fleet.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FleetService {
  selectedFleet: Fleet = {
    name: '',
    owner: JSON.parse(localStorage.getItem('userData'))['_id']
    
  };

  constructor(private http: HttpClient) { } 

  postFleet(fleet: Fleet){
    return this.http.post(environment.apiBaseUrl+'/newFleet',fleet);
  }

  getFleets() {
    return this.http.get(environment.apiBaseUrl + '/fleet');
  }
}
