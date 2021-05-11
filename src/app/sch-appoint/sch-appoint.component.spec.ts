import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAppointComponent } from './sch-appoint.component';

describe('SchAppointComponent', () => {
  let component: SchAppointComponent;
  let fixture: ComponentFixture<SchAppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchAppointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchAppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
