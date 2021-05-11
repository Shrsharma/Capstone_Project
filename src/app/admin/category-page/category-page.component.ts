import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/category.model';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  constructor(private route:Router, public catservice: CategoryService) { }

  ngOnInit(): void {
    this.catservice.refreshList();
  }

  btnClick = () =>{
    this.route.navigate(["Admin"]);
  }
  onSubmit(form: NgForm)
  {
    if(form.invalid)
    {
      alert("Form couldn't be submitted!!");
      return;
    }
    else{
      this.insertData(form);
    }
    
  }

  insertData(form: NgForm)
  {
    this.catservice.postCatDetails().subscribe(
      (res:any) => 
      {
        this.resetForm(form);
        this.catservice.refreshList();
        alert("submitted");
      },
      err =>
      {
        console.log("error");
      }
    );
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.catservice.deleteCatDetails(id)
        .subscribe(
          (res : any) => {
            this.catservice.refreshList();
            alert("Deleted successfully");
          },
          err => { console.log(err) }
        )
    }
  }

  resetForm(form: NgForm)
  {
    form.form.reset();
    this.catservice.catForm = new Category;
  }

}
