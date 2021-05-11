import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Med } from 'src/app/shared/med.model';
import { MedService } from 'src/app/shared/med.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  

  constructor(private route: Router, public medservice: MedService) { }

  filterTerm: string;
  key: string = 'category';
  reverse: boolean = false;

  ngOnInit(): void {

    this.medservice.refreshList();
  }

  sort(key: string )
  {
    this.key = key;
    this.reverse = !this.reverse;
  }


  btnClick = () =>{
    this.route.navigate(["Category"]);
  }

  btnClick1 = () =>{
    this.route.navigate(["Userinfo"]);
  }

  gotoLogout()
  {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    alert("You've been logged out!!");
    this.route.navigate(["Login"]);
  }
  
  onSubmit(form: NgForm)
  {
    if(form.invalid)
    {
      alert("Form couldn't be submitted!!");
      return;
    }
    else{
      if(this.medservice.medForm.id != '')
      {
        this.updateData(form);
      }
      this.insertData(form);
    }
    
  }

  insertData(form: NgForm)
  {
    this.medservice.postMedDetails().subscribe(
      (res:any) => 
      {
        this.resetForm(form);
        this.medservice.refreshList();
        alert("submitted");
      },
      err =>
      {
        console.log("error");
      }
    );
  }
  updateData(form: NgForm)
  {
    this.medservice.putMedDetails().subscribe(
      (res:any) => {
        this.resetForm(form);
        this.medservice.refreshList();
        alert("Form Updated");
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm)
  {
    form.form.reset();
    this.medservice.medForm = new Med;
  }

  fillForm(record : Med)
  {
    this.medservice.medForm = Object.assign({},record);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.medservice.deleteMedDetails(id)
        .subscribe(
          (res : any) => {
            this.medservice.refreshList();
            alert("Deleted successfully");
          },
          err => { console.log(err) }
        )
    }
  }

  
}
