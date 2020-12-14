import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';

const BASE_URL = "http://localhost:8080/lunchtime/"

@Injectable({
  providedIn: 'root'
})
export class CantiniereAPIService {

  constructor(private http: HttpClient) {}

  forgotPassword(email: string){
    return this.http.post(BASE_URL + "forgotpassword?email=" + email, null)
  }
  
  findUser(id: number, token: string){

    let options = {
      headers: {"Authorization": token}
    }

    return this.http.get(BASE_URL + "user/find/" + id, options)
  }

  updateUser(user: User, token: string){
    let options = {
      headers: {"Authorization": token}
    }

    return this.http.post(BASE_URL + "user/update/" + user.id, user, {headers: options.headers, observe : "response"})
  }

  register(user:User){
    return this.http.put(BASE_URL+"user/register",user);
  }

}