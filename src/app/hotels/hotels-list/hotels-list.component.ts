import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {Hotel} from '../hotel.model';
import {HotelsService} from '../../hotels.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  @Input() index;
  @Input() hotel: Hotel;

  constructor() { }

  ngOnInit(): void {
  }
}
