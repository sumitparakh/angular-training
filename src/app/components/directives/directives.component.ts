import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  contentStyle = {
    red: false,
    green: false,
  };

  redElemClass = '';

  name = 'Sumit';
  id = '1234';

  dataJson: any = {
    name: 'Sumit',
    id: 1234,
  };

  names = [
    { name: 'Sumit', id: 1 },
    { name: 'Shiv', id: 2 },
    { name: 'Mahesh', id: 3 },
  ];

  toggle = false;

  constructor() {}

  ngOnInit(): void {}

  changeAttribute() {
    this.dataJson = {
      name: this.dataJson.name
    };
    // delete this.dataJson.id;
  }
}
