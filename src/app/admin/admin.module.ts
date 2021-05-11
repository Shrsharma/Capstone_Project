import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AdminPageComponent,
    CategoryPageComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  exports:[
    AdminPageComponent,
    CategoryPageComponent
  ]
})
export class AdminModule { }
