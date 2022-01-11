import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){


  }
  canActivate():boolean{

    return true;
  }
   isAuth():boolean{

    const token = localStorage.getItem('token');
    if(!localStorage.getItem('token')){
      return false;
    }
     return true;
   
   }
  
}
