import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { StyleLiDirective } from './hotels/style-li.directive';
import { HotelBookComponent } from './hotel-book/hotel-book.component';
import { BookFormComponent } from './hotel-book/book-form/book-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';

const appRoutes: Routes = [
  {path: 'hotels', component: HotelsComponent, children: [
      {path: '', component: HotelDetailComponent},
      {path: ':id', component: HotelDetailComponent},
    ]},
  {path: 'book', component: HotelBookComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelsComponent,
    HotelDetailComponent,
    StyleLiDirective,
    HotelBookComponent,
    BookFormComponent,
    HotelsListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule
  ],
  exports: [MatBadgeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
