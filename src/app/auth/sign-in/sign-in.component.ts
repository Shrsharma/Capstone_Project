import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth-shared/auth.model';
import { AuthService } from 'src/app/auth-shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formModel: Auth = new Auth();
  formSubmit: boolean = false;

  constructor(private route: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin(form: NgForm)
  {
    this.formSubmit = true;
    if(form.invalid)
    {
      alert("error");
      return;
    }
    else{
      
      this.service.login(form.value).subscribe(
        (res:any) =>
        {
          alert("login done");
          sessionStorage.setItem('token',res.token);
          sessionStorage.setItem('role',form.value.username);
          if(sessionStorage.getItem('role') == "admin@gmail.com")
          {
            this.route.navigate(["Admin"]);
          }
          else
            this.route.navigate(["Home"]);
        },
        err =>{
          alert("Username or Password is Incorrect or User Not Found");
        }
      );
      
    }
  }

}
