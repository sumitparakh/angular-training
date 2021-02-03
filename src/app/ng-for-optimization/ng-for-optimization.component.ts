import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-optimization',
  templateUrl: './ng-for-optimization.component.html',
  styleUrls: ['./ng-for-optimization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgForOptimizationComponent implements OnInit {
  data = [
    {
      id: 41,
      name: 'Sumit',
    },
    {
      id: 27,
      name: 'Mahesh',
    },
    {
      id: 31,
      name: 'Shiv',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  update2ndStudent(): void {
    this.data = [
      {
        id: 41,
        name: 'Sumit',
      },
      { id: 27, name: 'Mahesh' },
      { name: 'Srikanth', id: 3 },
    ];
  }

  trackById(index: number, item: any): number {
    console.log({ index, item });
    return item.id;
  }
}
