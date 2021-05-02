import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formSubmit:boolean;
  formControl: any;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({

      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.formControl=this.loginForm.controls;
  }

  handleLogInSubmit()
  {
    this.formSubmit = true;
    if(this.loginForm.invalid)
    {
      return;
    }
    else{
      console.log("Login Done");
    }
  }

}
