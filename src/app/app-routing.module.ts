import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// location is based off what the name you originally assigned the component
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  // the one without the path will get loaded first
  { path: '', component: HomeComponent},
  { path: 'list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
