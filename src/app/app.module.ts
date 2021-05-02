import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
