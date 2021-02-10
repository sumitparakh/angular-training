import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { uniqueId } from './decorators/component-id.decorator';
import { SealedDemo } from './decorators/sealed-demo';
import { Demo1Component } from './demo-1/demo-1.component';

@uniqueId
@Component({
  selector: 'app-decorator-comps',
  templateUrl: './decorator-comps.component.html',
  styleUrls: ['./decorator-comps.component.scss'],
})
export class DecoratorCompsComponent implements OnInit, AfterViewInit {
  sealedObj = new SealedDemo('Hello world');

  @ViewChild('p', { static: true })
  paragraphElement?: ElementRef<any>;

  @ViewChild(Demo1Component)
  decoratorDemoOne?: Demo1Component;

  constructor() {}

  ngOnInit(): void {
    // delete (SealedDemo.prototype as any).greeting;
    console.log({ sealedObj: this.sealedObj });

    console.log({ paragraphElement: this.paragraphElement });

    // (SealedDemo.prototype as any).id = 4;
    // (SealedDemo.prototype as any).sayhello = function() {
    //   console.log('Hello world');
    // };
    console.log({ isSealed: Object.isSealed(SealedDemo.prototype) });

    console.log({ ComponentRef: this, id: (this as any).compid });
    (this as any).log('Hello world');
  }

  ngAfterViewInit(): void {
    console.log({ decoratorDemoOne: this.decoratorDemoOne });
    console.log({ demoObj: this.decoratorDemoOne?.demoObj });
    // this.save(undefined as any);
  }

  // save(@required name: string) {
  // }
}
