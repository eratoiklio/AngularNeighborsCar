import { Component, OnInit } from '@angular/core';
import {faCalendarAlt, faSearch} from '@fortawesome/free-solid-svg-icons';
import rides from '../../ridesData.js'
@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.component.html',
  styleUrls: ['./search-ride.component.scss']
})
export class SearchRideComponent implements OnInit {
  rides=[];
  filteredRides=[];
  faCalendarAlt=faCalendarAlt;
  faSearch=faSearch;
  constructor() { }

  ngOnInit(): void {
    this.rides=rides;
  }
  handleChange() {
   
}
handleSubmit()  {
  
}
dataSelected(date){
   

}
showCalendar() {
   
  }
search(filters)  {
  this.filteredRides = this.rides;
   
  }

}
