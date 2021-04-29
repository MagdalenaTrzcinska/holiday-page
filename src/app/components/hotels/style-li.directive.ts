import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appStyleLi]'
})
export class StyleLiDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'gray';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
