import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-expressions',
  templateUrl: './template-expressions.component.html',
  styleUrls: ['./template-expressions.component.scss'],
})
export class TemplateExpressionsComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {}

  squareRoot(num: number): number {
    console.log({num});
    return Math.sqrt(num);
  }
}
