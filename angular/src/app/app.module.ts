import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialComponent } from './components/social/social.component';
import { FilterComponent } from './components/filter/filter.component';
import { BodyComponent } from './components/body/body.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { HomeComponent } from './components/home/home.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { ResultsComponent } from './components/results/results.component';
import { NewComponent } from './components/new/new.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SocialComponent,
    FilterComponent,
    BodyComponent,
    DetailedComponent,
    HomeComponent,
    CommingSoonComponent,
    ResultsComponent,
    NewComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    CheckoutComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
