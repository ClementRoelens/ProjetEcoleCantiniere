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
    return this.http.post(BASE_URL + "forgotpassword?email=" + email, {observe : "response"})
  }
  
  findUser(id: number, token: string){

    let options = {
      headers: {"Authorization": token}
    }

    return this.http.get(BASE_URL + "user/find/" + id, options)
  }

  findAllUser(token:string){
    let options = {
      headers: {"Authorization": token}
    }

    return this.http.get(BASE_URL+"user/findall",options);
  }

  findImg(id:number,token:string){
    let options = {
      headers: {"Authorization": token}
    }

    return this.http.get(BASE_URL+"user/findimg/"+id,options);
  }

  getMenu(){
    return this.http.get(BASE_URL + "menu/findallavailablefortoday")
  }
  getMeal(week:number){
    return this.http.get(BASE_URL + "meal/findallavailableforweek/"+week)
  }
  getMenuImg(id:number){
    return this.http.get(BASE_URL + "menu/findimg/"+id)
  }
  getMealImg(id:number){
    return this.http.get(BASE_URL + "meal/findimg/"+id)
  }
  updateMenuImage(id:number,body){
    return this.http.patch(BASE_URL + "menu/updateimg/"+id,body)
  }
  

  updateUser(user: User, token: string){
    let options = {
      headers: {"Authorization": token}
    }

    return this.http.patch(BASE_URL + "user/update/" + user.id, user, {headers: options.headers, observe : "response"})
  }

  register(user:User){
    return this.http.put(BASE_URL+"user/register",user);
  }

  authentification(emailP:string,passwordP:string){
    let credentials = {
      email:emailP,
      password:passwordP
    };
    return this.http.post(BASE_URL+"login",credentials,{observe:"response"});
  }

}