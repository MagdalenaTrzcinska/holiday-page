import {Component, ViewChild} from '@angular/core';
import {HotelsService} from '../hotels.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent {
  @ViewChild('f') form: NgForm;

  constructor(private service: HotelsService) {
  }
  onSearch(e): void {
    this.service.onSearch(e.value.filter);
  }
}
