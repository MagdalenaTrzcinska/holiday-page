import {Injectable} from '@angular/core';
import {Hotel} from './hotels/hotel.model';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  loggedIn = false;
  errorMessage = false;

  hotels: Hotel[] = [
    {
      imagePath: [
        'https://cdn.pixabay.com/photo/2021/03/08/03/52/double-beds-6078049_1280.jpg',
        'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
      ],
      location: 'USA',
      description: [
        'two rooms with kitchen and private bathroom',
        'large balcony overlooking the city',
        'close to the center',
        'market 300m away',
      ]
    },
    {
      imagePath: [
        'https://images.pexels.com/photos/6434623/pexels-photo-6434623.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/372470/pexels-photo-372470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      ],
      location: 'UK',
      description: [
        '222222',
        '3333333'
      ]
    },
  ];

  selectedHotels: Hotel[] = [];

  constructor() {
  }
}
