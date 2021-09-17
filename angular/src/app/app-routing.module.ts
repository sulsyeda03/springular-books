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


const routes: Routes = [
  { path: '', redirectTo:'body:result', pathMatch: 'full' },
  { path: 'body:result', component: BodyComponent },
  { path: 'detailed/:isbn13', component: DetailedComponent },
  { path: 'social', component: CommingSoonComponent },
  { path: 'results/:search', component: ResultsComponent },
  { path: 'new', component: NewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }