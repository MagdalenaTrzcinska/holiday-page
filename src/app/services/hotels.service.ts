import {Injectable} from '@angular/core';
import {Hotel} from '../components/hotels/hotel.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  loggedIn = false;
  errorMessage: string = null;
  hotels: Hotel[];
  selectedHotels: Hotel[] = [];

  filteredHotels;
  filtered = new Subject<Hotel[]>();
  constructor(private http: HttpClient) {
    this.getting();
  }

  onSearch(element): void {
    this.filteredHotels = [];
    for (const hotel of this.hotels) {
      if (hotel.location.toUpperCase().includes(element.toUpperCase())) {
        this.filteredHotels.push(hotel);
        this.filtered.next(this.filteredHotels);
      }
    }
  }

  getting() {
    this.http.get<{ [id: string]: Hotel }>('https://holiday-b60e7-default-rtdb.firebaseio.com/hotels.json')
      .pipe(
        map(responseData => {
          const pastArray: Hotel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              pastArray.push({...responseData[key], id: key});
            }
          }
          return pastArray;
        })
      )
      .subscribe(posts => {
        this.hotels = posts;
      });
  }
}
