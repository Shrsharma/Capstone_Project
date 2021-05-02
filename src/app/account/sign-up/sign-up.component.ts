import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formSubmit : boolean;
  formControl : any;
  signupform: FormGroup;

  ngOnInit(): void {
    this.signupform = this.formBuilder.group(
      {
        firstname : ['',Validators.required],
        lastname  : ['', Validators.required],
        phonenumber: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
        email : ['',[Validators.required,Validators.email]],
        password : ['',[Validators.required,Validators.minLength(6)]],
        confirm : ['',[Validators.required,Validators.minLength(6)]]
      })
      this.formControl = this.signupform.controls;
  }
  
  handleSignUpSubmit()
  {
    this.formSubmit = true;
    if(this.signupform.invalid)
    {
      return;
    }
    else{
      console.log("Sign-up done");
    }
  }

}
