import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ngData]',
})
export class NgDataDirective implements OnInit, OnChanges {
  @Input() ngData: any;

  elem: ElementRef;

  constructor(el: ElementRef) {
    this.elem = el;
  }

  ngOnInit() {
    if (this.ngData) {
      this.setDataSet();
    }
  }

  removeDataSet() {
    for (const key in this.elem.nativeElement.dataset) {
      delete this.elem.nativeElement.dataset[key];
    }
  }

  setDataSet() {
    this.removeDataSet();
    for (const key in this.ngData) {
      this.elem.nativeElement.dataset[key] = this.ngData[key];
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue } = changes.ngData;
    if (
      previousValue &&
      JSON.stringify(previousValue) !== JSON.stringify(currentValue)
    ) {
      this.setDataSet();
    }
  }
}
