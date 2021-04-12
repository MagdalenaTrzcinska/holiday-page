import {Injectable} from '@angular/core';
import {Hotel} from './hotels/hotel.model';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  loggedIn = false;
  errorMessage: string = null;

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
    {
      imagePath: [
        'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/01/28/09/14/interior-design-4799242_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/12/01/00/10/blue-hour-3848856_960_720.jpg',
      ],
      location: 'Germany',
      description: [
        '222222',
        '3333333'
      ]
    },
    {
      imagePath: [
        'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/6315803/pexels-photo-6315803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
      location: 'Australia',
      description: [
        '222222',
        '3333333'
      ]
    }
  ];

  selectedHotels: Hotel[] = [];

  constructor() {
  }
}
