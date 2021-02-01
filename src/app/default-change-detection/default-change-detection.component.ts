import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-change-detection',
  templateUrl: './default-change-detection.component.html',
  styleUrls: ['./default-change-detection.component.scss']
})
export class DefaultChangeDetectionComponent implements OnInit, DoCheck {

  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('Default Change Detection::ngDoCheck');
  }

}
