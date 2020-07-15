import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { BookRideComponent } from './book-ride/book-ride.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { OfferedRidesComponent } from './offered-rides/offered-rides.component';
import { SearchRideComponent } from './search-ride/search-ride.component';
import { NewRideComponent } from './new-ride/new-ride.component';
import { TakenRidesComponent } from './taken-rides/taken-rides.component';

@NgModule({
  declarations: [
    AppComponent,
    BookRideComponent,
    NavigationBarComponent,
    OfferedRidesComponent,
    SearchRideComponent,
    NewRideComponent,
    TakenRidesComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
