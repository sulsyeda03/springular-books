import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { DataService } from './services/data.service';
import { ResultsComponent } from './components/results/results.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo:'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  { path: 'detailed/:isbn13', component: DetailedComponent },
  { path: 'results/:search', component: ResultsComponent },
  { path: 'cart', component:CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
