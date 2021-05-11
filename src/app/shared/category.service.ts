import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  catForm: Category = new Category();
  readonly baseUrl = "http://localhost:63595/api/Category";
  list : Category[];

  postCatDetails()
  {
    return this.http.post(this.baseUrl,this.catForm);
  }

  deleteCatDetails(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>this.list = res as Category[]);
  }

}
