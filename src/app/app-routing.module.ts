import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchRideComponent} from "./search-ride/search-ride.component";
import {TakenRidesComponent} from "./taken-rides/taken-rides.component";
import {OfferedRidesComponent} from "./offered-rides/offered-rides.component";
import {NewRideComponent} from "./new-ride/new-ride.component";
import {BookRideComponent} from "./book-ride/book-ride.component";

const routes: Routes = [
  {path: "", component: SearchRideComponent},
  {path:"takenRides", component:TakenRidesComponent},  
  {path:'offeredRides', component: OfferedRidesComponent},
  {path:'newRide', component: NewRideComponent},
  {path:"book/:ride_id", component:BookRideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
