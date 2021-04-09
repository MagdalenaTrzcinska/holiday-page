import {Component, OnInit} from '@angular/core';
import {Hotel} from "./hotel.model";
import {HotelsService} from "../hotels.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private service: HotelsService) {
  }

  ngOnInit(): void {
    this.hotels = this.service.hotels;
  }

}
