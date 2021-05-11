import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-shared/auth.service';

interface User {
  fullName: String;
  userName: String;
  phoneNumber: String;
  email: String;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userDetails: User[];

  constructor(private route:Router, public service: AuthService) { }

  ngOnInit(): void {
      this.service.getUserDetails().subscribe(
        (res:any) =>{
          this.userDetails = JSON.parse(JSON.stringify(res));
          
        },
        err =>{
          alert("Error");
        }
      );

  }

  btnClick = () =>
  {
    this.route.navigate(["Admin"]);
  }

}
