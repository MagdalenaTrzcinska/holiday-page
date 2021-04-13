import {Component, DoCheck, OnInit} from '@angular/core';
import {Hotel} from './hotel.model';
import {HotelsService} from '../hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  filteredHotel: Hotel[] = [];

  constructor(private service: HotelsService) {
  }

  ngOnInit(): void {
    this.filteredHotel = this.service.hotels;

    this.service.filtered.subscribe((hotels: Hotel[]) => {
      this.filteredHotel = hotels;
    });
  }
}
