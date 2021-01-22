import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Apigee Edge';
  showProfile = true;

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() { // componentDidMount
    console.log('ngOnInit');
  }

  ngOnDestroy() { // componentWillUnmount
    console.log('ngOnDestroy');
  }

}
