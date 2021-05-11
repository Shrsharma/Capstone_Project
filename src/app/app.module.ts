import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth-shared/auth.service';
import { HomeComponent } from './home/home.component';
import { SecureInterceptor } from './secure/secure.inceptor';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SchAppointComponent } from './sch-appoint/sch-appoint.component';
import { UserCartComponent } from './user-cart/user-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstPageComponent,
    PageNotfoundComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    SchAppointComponent,
    UserCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: SecureInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
