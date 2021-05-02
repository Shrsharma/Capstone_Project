import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { UserCartComponent } from './user-cart/user-cart.component';



@NgModule({
  declarations: [
    UserPageComponent,
    UserCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
