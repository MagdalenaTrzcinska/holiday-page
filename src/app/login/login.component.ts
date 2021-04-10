import {Component, OnInit} from '@angular/core';
import {HotelsService} from '../hotels.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: boolean;

  constructor(private service: HotelsService) {
  }

  ngOnInit(): void {
    this.errorMessage = this.service.errorMessage;
  }

}
