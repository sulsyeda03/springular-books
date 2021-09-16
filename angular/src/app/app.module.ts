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
