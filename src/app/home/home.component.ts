import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-shared/auth.service';
import { Med } from '../shared/med.model';
import { MedService } from '../shared/med.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData : any;

  constructor(private route: Router, private service: AuthService, public medserve: MedService) { }

  ngOnInit(): void {

    this.medserve.refreshList();

    this.service.getUserProfile().subscribe(
      (res:any) =>{
        this.userData = res;
      },
      err =>{
        alert("Error");
      }
    );

  }

  onLogout()
  {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    this.route.navigate(["Login"])
  }

  gotoShop(md: Med)
  {
    if(sessionStorage.getItem(md.medicineName) != null)
    {
      alert("Already in cart");
    }
    else
      sessionStorage.setItem(md.medicineName,md.price);
  }

  onCart()
  {
    this.route.navigate(["Cart"]);
  }

}
