import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hotel} from './hotel.model';
import {HotelsService} from '../hotels.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit, OnDestroy {
  filteredHotel: Hotel[] = [];
  subscription: Subscription;

  constructor(private service: HotelsService) {
  }

  ngOnInit(): void {
    this.filteredHotel = this.service.hotels;

    this.subscription = this.service.filtered.subscribe((hotels: Hotel[]) => {
      this.filteredHotel = hotels;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
