import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HotelsService} from '../hotels.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent {
  @ViewChild('element') element: ElementRef;

  constructor(private service: HotelsService) {
  }
  onSearch(el): void {
    this.service.onSearch(el);
  }
}
