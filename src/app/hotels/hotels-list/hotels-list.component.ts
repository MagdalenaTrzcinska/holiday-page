import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../hotel.model";

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
