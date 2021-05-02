import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './account/log-in/log-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  
  {
    path: "Log", component: LogInComponent
  },
  {
    path: "Sign", component: SignUpComponent
  },
  {
    path: "First", component: FirstPageComponent
  },
  {
    path: '', component: FirstPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
