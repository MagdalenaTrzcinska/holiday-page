import {TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HotelsService} from '../../services/hotels.service';
import {HttpClientModule} from '@angular/common/http';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [HotelsService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should .nav-link be right', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelectorAll('.nav-link');
    expect(p[0].textContent).toEqual('Holidays');
    expect(p[1].textContent).toEqual('Hotels');
    expect(p[2].textContent).toEqual('Login');
  });

  it('should ddd', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
  });
});
