import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  medForm: User = new User();
  readonly baseUrl = "http://localhost:63595/api/User";
  list : User[];

  postMedDetails()
  {
    return this.http.post(this.baseUrl,this.medForm);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>this.list = res as User[]);
  }
}
