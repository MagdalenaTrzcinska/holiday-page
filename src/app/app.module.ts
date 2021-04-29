import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelDetailComponent } from './components/hotels/hotel-detail/hotel-detail.component';
import { StyleLiDirective } from './components/hotels/style-li.directive';
import { HotelBookComponent } from './components/hotel-book/hotel-book.component';
import { BookFormComponent } from './components/hotel-book/book-form/book-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { HotelsListComponent } from './components/hotels/hotels-list/hotels-list.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'hotels', component: HotelsComponent, children: [
      {path: '', component: HotelDetailComponent},
      {path: ':id', component: HotelDetailComponent},
    ]},
  {path: 'book', canActivate: [AuthGuard], component: HotelBookComponent},
  {path: 'login', component: LoginComponent}

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
    LoginComponent,
    SearchHotelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [MatBadgeModule, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
