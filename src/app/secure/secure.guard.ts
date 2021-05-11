import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {

  constructor(private route: Router) {
    
  }
  canActivate
  (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):  boolean {

    if(sessionStorage.getItem('token') != null && sessionStorage.getItem('role') != "admin@gmail.com")
      return true;
    else{
      alert("Login as a User First!!");
      this.route.navigate(["Login"]);
      return false;
    }
  }
  
}
