import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-demo-one',
  templateUrl: './demo-1.component.html',
  styleUrls: ['./demo-1.component.scss']
})
export class Demo1Component implements OnInit {

  demoObj = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
