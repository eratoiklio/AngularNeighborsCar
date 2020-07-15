import { Component, OnInit } from '@angular/core';
import { faCheck, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.scss']
})
export class BookRideComponent implements OnInit {
  faCheck = faCheck;
  faAngleLeft=faAngleLeft;
  faAngleRight=faAngleRight;
  constructor() { }

  ngOnInit(): void {

  }
  bookeRide(): void {
    console.log("bookRide")
  }
  handelOnChange():void {
    console.log("changed")
  }
  modifySeats():void {
    console.log("changed")
  }
}
