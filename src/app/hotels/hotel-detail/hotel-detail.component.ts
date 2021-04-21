import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {Hotel} from '../hotel.model';
import {HotelsService} from '../../hotels.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel;
  id: number;
  totalPrice = 0;
  currentDate: string;
  startDate;
  finishDate;
  constructor(private service: HotelsService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.hotel = this.service.hotels.find(e => +e.id === +this.id);
    });
  }

  onBook(): void {
    if (this.service.loggedIn) {
      alert('added');
      this.service.selectedHotels.push(this.hotel);
    } else {
      this.service.errorMessage = 'You must login!';
      this.router.navigate(['login']);
    }
  }
}
