import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sch-appoint',
  templateUrl: './sch-appoint.component.html',
  styleUrls: ['./sch-appoint.component.css']
})
export class SchAppointComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subAppoint()
  {
    alert("Appointment Scheduled!!");
    window.location.reload();
  }

}
