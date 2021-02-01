import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit, OnChanges {
  task = '';

  taskList: any[] = [];

  user = {
    name: 'Sumit'
  };

  get runChangeDetection(): number {
    console.log('Checking the view');
    return 112;
  }

  constructor() {}

  ngOnInit(): void {
    console.log('ChangeDetectionComponent::OnInit');
  }

  ngOnChanges(): void {
    console.log('ChangeDetectionComponent::DoCheck');
  }

  changeUser(): void {
    this.user = {
      name: 'Mahesh'
    };
    // this.user.name = 'Mahesh';
  }

  addTask(): void {
    this.taskList.push(this.task);
    // this.data.name = this.name;
  }
}
