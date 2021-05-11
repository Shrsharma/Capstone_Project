import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authser: AuthService, private route: Router) { }

  formControl : any;
  formSubmit : boolean = false;


  ngOnInit(): void {

    this.authser.regform.reset();
    this.formControl = this.authser.regform.controls;
  }


  handleRegister()
  {
    this.authser.authRegister().subscribe(
      (res:any) =>{
        this.formSubmit = true;
        if(this.authser.regform.invalid)
        {
          alert("invalid form");
          return;
        }
        else
        {
          if(res.succeeded == false)
          {
            res.errors.forEach((ele:any) => {
              switch(ele.code)
              {
                case 'DuplicateUserName':
                  alert('Username is already taken');
                  break;
    
                default:
                  alert(ele.description);
                  break;
              }
              
            });
          }
          else{
            alert("Registered");
            this.route.navigate(["Login"]);
          }
        }

      },
      err => {
        this.formSubmit = false;
        if(this.authser.regform.invalid)
        {
          alert("invalid form");
          return;

        }
      }
    );
  }

  
  

}
