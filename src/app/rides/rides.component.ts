import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  @Input() rides: Array<Object>;
  constructor() { }

  ngOnInit(): void {
  }
  handleClick(a){
    console.log(a);
  }

}
