import { Component, OnInit } from '@angular/core';
import {Hotel} from "../hotels/hotel.model";
import {HotelsService} from "../hotels.service";

@Component({
  selector: 'app-hotel-book',
  templateUrl: './hotel-book.component.html',
  styleUrls: ['./hotel-book.component.scss']
})
export class HotelBookComponent implements OnInit {
  selectedHotels: Hotel[];

  constructor(private service: HotelsService) {
    this.selectedHotels = this.service.selectedHotels;
  }

  ngOnInit(): void {
  }

}
