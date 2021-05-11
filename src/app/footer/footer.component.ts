import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gotoAbout()
  {
    this.route.navigate(["About"]);
  }

  gotoContact()
  {
    if(sessionStorage.getItem('token') != null)
    {
      this.route.navigate(["Contact"]);
    }
    else{
      alert("Login First");
      this.route.navigate(["Login"]);
    }
  }

  gotoShop()
  {
    if(sessionStorage.getItem('token') != null)
    {
      this.route.navigate(["Home"]);
    }
    else{
      alert("Login First");
      this.route.navigate(["Login"]);
    }
  }

  gotoSch()
  {
    if(sessionStorage.getItem('token') != null)
    {
      this.route.navigate(["Appoint"]);
    }
    else{
      alert("Login First");
      this.route.navigate(["Login"]);
    }
  }

}
