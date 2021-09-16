import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { FilterComponent } from './components/filter/filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    SocialComponent,
    FilterComponent,
    NavbarComponent,
    DetailedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
