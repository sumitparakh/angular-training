import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngData]',
})
export class NgDataDirective implements OnInit {
  @Input() ngData: any;

  elem: ElementRef;

  constructor(el: ElementRef) {
    this.elem = el;
  }

  ngOnInit() {
    if (this.ngData) {
      for (const key in this.ngData) {
        this.elem.nativeElement.dataset[key] = this.ngData[key];
      }
    }
  }
}
