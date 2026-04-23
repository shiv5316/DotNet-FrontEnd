import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

  api = 'https://localhost:7130/api/Users';

  constructor(private http: HttpClient) {}

  addUser(data:any){
    return this.http.post(this.api, data);
  }

  getUsers(){
    return this.http.get(this.api);
  }
}