import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile2',
  template: `
    <div class="alert alert-danger">
      <i class="fa fa-exclamation"></i>
      <span class="message"> </span>
    </div>
  `,
  styles: [],
})
export class Profile2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
