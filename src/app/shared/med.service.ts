import { Injectable } from '@angular/core';
import { Med } from './med.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor(private http: HttpClient) { }

  medForm: Med = new Med();
  readonly baseUrl = "http://localhost:63595/api/Medicine";
  list : Med[];

  postMedDetails()
  {
    return this.http.post(this.baseUrl,this.medForm);
  }

  putMedDetails() {
    return this.http.put(`${this.baseUrl}/${this.medForm.id}`, this.medForm);
  }

  deleteMedDetails(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>this.list = res as Med[]);
  }
}