import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommService } from 'src/app/core/data-binding/comm.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  /**
   * Accept input property 'name'
   */
  @Input()
  name: string = '';

  @Output()
  OnNameClick = new EventEmitter();

  contact = '';

  constructor(private commService: CommService) { }

  ngOnInit(): void {
  }

  OnClickNameSection(event: any) {
    this.commService.nameClicked({data: 'Success'});
  }

}
