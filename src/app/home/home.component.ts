import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommService } from '../core/data-binding/comm.service';
import { HttpRequestService } from '../core/http-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Apigee Edge';
  showProfile = true;

  name = 'Sumit';

  constructor(
    private commService: CommService,
    private httpRequest: HttpRequestService
  ) {
    console.log('Constructor');
    this.getGithubData();
  }

  getGithubData(): void {
    this.httpRequest.get('https://api.github.com').subscribe(
      (response) => {
        this.commService.saveGithubData(response);
        // console.log({ response });
      },
      (error) => {
        console.log({ error });
      }
    );
  }

  subscribeNameActivity(): void {
    this.commService.nameActivity$.subscribe(
      (response) => {
        console.log('Subscription called: ', response);
      },
      (error) => {
        console.error({ error });
      }
    );
  }

  ngOnInit(): void {
    // componentDidMount
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    // componentWillUnmount
    console.log('ngOnDestroy');
  }

  OnNameClick(event: any): void {
    console.log('Name clicked', event);
  }
}
