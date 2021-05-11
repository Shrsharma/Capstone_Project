import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

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
}
