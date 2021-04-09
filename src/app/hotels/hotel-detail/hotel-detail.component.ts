import {Component, OnInit} from '@angular/core';
import {Hotel} from "../hotel.model";
import {HotelsService} from "../../hotels.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel;
  id: number;

  constructor(private service: HotelsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.hotel = this.service.hotels[this.id];
    });
  }

  onBook() {
    alert("added");
    this.service.selectedHotels.push(this.hotel);
  }
}
