import { Component, OnInit } from '@angular/core';
import { ThemingService } from '../core/theming.service';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss']
})
export class ChangeThemeComponent implements OnInit {

  constructor(private theme: ThemingService) { }

  ngOnInit(): void {
  }

}
