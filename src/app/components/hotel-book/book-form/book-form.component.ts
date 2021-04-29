import {Component, DoCheck, OnChanges, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  currentDate: string;
  startDate;
  finishDate;

  constructor() {
  }

  ngOnInit(): void {
    this.getCurrentDate();
  }

  getCurrentDate() {
    let date: Date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    let yyyy = date.getFullYear();
    this.currentDate = yyyy + '-' + this.addZero(mm) + '-' + this.addZero(dd);
  }

  addZero(i) {
    if (i < 10) {
      return '0' + i;
    } else {
      return i;
    }
  }

  onSubmit() {
    console.log(this.form);
  }
}
