import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommService } from './core/data-binding/comm.service';
import { HttpRequestService } from './core/http-request.service';

@Component({
  selector: 'app-project',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
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

  getGithubData() {
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

  subscribeNameActivity() {
    this.commService.nameActivity$.subscribe(
      (response) => {
        console.log('Subscription called: ', response);
      },
      (error) => {
        console.error({ error });
      }
    );
  }

  ngOnInit() {
    // componentDidMount
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    // componentWillUnmount
    console.log('ngOnDestroy');
  }

  OnNameClick(event: any) {
    console.log('Name clicked', event);
  }
}
