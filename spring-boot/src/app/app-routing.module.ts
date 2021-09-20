import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { DataService } from './services/data.service';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { ResultsComponent } from './components/results/results.component';
import { NewComponent } from './components/new/new.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: '', redirectTo:'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  { path: 'results/:search/:pageNumber', component: ResultsComponent },
  { path: 'body/:search', component: BodyComponent },
  { path: 'body/:page', component: BodyComponent},
  { path: 'detailed/:isbn13', component: DetailedComponent },
  { path: 'results/:search', component: ResultsComponent } , 
  { path: 'social', component: CommingSoonComponent },
  { path: 'new', component: NewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'error', component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }