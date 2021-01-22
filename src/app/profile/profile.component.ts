import {
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', './profile2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent
  implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
  profileHash = '';
  profileName = 'Sumit Parakh';
  intervalRef: any;

  constructor() {
    console.log('Profile::constructor');
  }

  ngAfterContentInit() {}

  ngAfterViewInit() {}

  ngOnInit() {
    this.intervalRef = setInterval(() => {
      this.profileHash = (Math.random() * 100).toFixed(4);
    }, 1000);
    console.log('Profile::ngOnInit');
  }

  ngOnDestroy() {
    console.log('Profile::ngOnDestroy');
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }
}
