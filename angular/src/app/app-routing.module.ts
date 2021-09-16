import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { DataService } from './services/data.service';

const routes: Routes = [
  { path: '', redirectTo:'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  { path: 'detailed/:isbn13', component: DetailedComponent },
  { path: 'body/free' , component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }