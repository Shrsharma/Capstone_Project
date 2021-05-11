import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  
  readonly baseUrl = "http://localhost:63595/api/";
  regform = this.fb.group(
  {
    fullname: ['',Validators.required],
    username : ['',Validators.required],
    phonenumber: ['',Validators.required],
    email  : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required,Validators.minLength(6),Validators.pattern('(?=.*[a-z])(?=.*[0-9])[a-z\d].{6,}')]]
  });

  authRegister()
  {
    var body = {
      FullName: this.regform.value.fullname,
      UserName : this.regform.value.username,
      PhoneNumber: this.regform.value.phonenumber,
      Email : this.regform.value.email,
      Password : this.regform.value.password
    }
    return this.http.post(this.baseUrl+"Auth/Register",body);
  }

  login(formData: any)
  {
    return this.http.post(this.baseUrl+"Auth/Signin",formData)
  }

  getUserProfile()
  {
    return this.http.get(this.baseUrl+"Profile");
  }

  getUserDetails()
  {
    return this.http.get(this.baseUrl+"Profile/Details");
  }
  
}
