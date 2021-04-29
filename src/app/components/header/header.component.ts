import {Component, DoCheck} from '@angular/core';
import {HotelsService} from '../../services/hotels.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  badge: number;

  constructor(private service: HotelsService) {
  }

  ngDoCheck(): void {
    this.badge = this.service.selectedHotels.length;
  }

}
