import { TestBed } from '@angular/core/testing';

import { HotelsService } from './hotels.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HotelsService', () => {
  let carService, http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HotelsService,
        { provide: HttpClient }
      ],
      imports: [HttpClientTestingModule]
    });
    carService = TestBed.get(HotelsService);
    http = TestBed.get(HttpTestingController);
  });
});
