import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL='http://localhost:3000/';

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService ) { }


  singin(user:any){
    return this.http.post(`${this.URL}auth/login`,user);
  }

  isAuth():boolean{

      
    if (!localStorage.getItem("token")) {
      alert('inicia sessió en login')
      return false;
    }
    const token =  JSON.stringify(localStorage.getItem('token'));
    
    if(this.jwtHelperService.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
     return true;
   
   }
  
}
