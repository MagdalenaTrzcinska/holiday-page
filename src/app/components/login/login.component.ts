import {Component, OnInit, ViewChild} from '@angular/core';
import {HotelsService} from '../../services/hotels.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') formLogIn: NgForm;
  errorMessage: string = null;
  account = {
    email: 'user12@qwer.com',
    password: 'qwert1234'
  };

  constructor(private service: HotelsService) {
  }

  ngOnInit(): void {
    this.errorMessage = this.service.errorMessage;
  }

  onLogin(): void {
    const email = this.formLogIn.value.email;
    const password = this.formLogIn.value.password;
    if (this.account.email === email && this.account.password === password) {
      this.service.loggedIn = true;
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Incorrect email or/and password.';
    }
  }

  onFillIn(): void {
    this.formLogIn.form.patchValue({
      email: this.account.email,
      password: this.account.password
    });
  }
}
