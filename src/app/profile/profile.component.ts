import {
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommService } from '../core/data-binding/comm.service';
import { LogService } from '../core/log.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', './profile2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent
  implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
  profileHash = '';
  profileName = 'Sumit Parakh';
  intervalRef: any;

  githubData: any;

  constructor(private log: LogService, private commService: CommService) {
    console.log('Profile::constructor');
    /**
     * DO NOT FORGET to unsubscribe subscription.
     */
    this.commService.nameActivity$.subscribe(
      (response) => {
        console.log('Profile::Subscription called: ', response);
      },
      (error) => {
        console.error({ error });
      }
    );

    this.commService.FetchedGithubData$.subscribe((githubData) => {
      this.githubData = githubData;
      console.log('Fetched github data: ', { githubData });
    });
  }

  getGithubData() {}

  ngAfterContentInit() {}

  ngAfterViewInit() {}

  ngOnInit() {
    this.intervalRef = setInterval(() => {
      this.profileHash = (Math.random() * 100).toFixed(4);
    }, 1000);
    this.log.info('Profile::ngOnInit');
  }

  ngOnDestroy() {
    console.log('Profile::ngOnDestroy');
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }
}
