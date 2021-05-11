import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { CategoryPageComponent } from './admin/category-page/category-page.component';
import { UserInfoComponent } from './admin/user-info/user-info.component';
import { AuthService } from './auth-shared/auth.service';
import { AuthModule } from './auth/auth.module';
import { RegisterComponent } from './auth/register/register.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SchAppointComponent } from './sch-appoint/sch-appoint.component';
import { AdminGuard } from './secure/admin.guard';
import { SecureGuard } from './secure/secure.guard';
import { UserCartComponent } from './user-cart/user-cart.component';

const routes: Routes = [
  {
    path: "First", component: FirstPageComponent
  },
  {
    path: '', component: FirstPageComponent
  },
  {
    path: "Admin", component: AdminPageComponent, canActivate:[AdminGuard]
  },
  {
    path: "Category", component: CategoryPageComponent, canActivate:[AdminGuard]
  },
  {
    path: "Userinfo", component: UserInfoComponent, canActivate:[AdminGuard]
  },
  {
    path: "Register", component: RegisterComponent
  },
  {
    path: "Login", component: SignInComponent
  },
  {
    path: "Home", component: HomeComponent, canActivate:[SecureGuard]
  },
  {
    path: "Cart", component: UserCartComponent, canActivate:[SecureGuard]
  },
  {
    path: "About", component:AboutUsComponent
  },
  {
    path: "Contact", component:ContactUsComponent
  },
  {
    path: "Appoint", component:SchAppointComponent
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotfoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
