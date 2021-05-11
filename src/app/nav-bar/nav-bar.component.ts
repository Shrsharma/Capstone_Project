import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gotoRegister()
  {
    this.route.navigate(["Register"]);
  }

  gotoLogin()
  {
    if(sessionStorage.getItem('token') != null)
    {
      alert("Already Logged in");
    }
    else{
      this.route.navigate(["Login"]);
    }
  }

  gotoAdmin()
  {
    this.route.navigate(["Admin"]);
  }
  gotoUser()
  {
    this.route.navigate(["Home"]);
  }

}
