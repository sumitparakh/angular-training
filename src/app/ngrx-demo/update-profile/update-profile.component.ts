import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateProfile } from '../ngrx-actions';
import { IState } from '../ngrx-reducer';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
  profile$: Observable<IState>;

  constructor(private store: Store<{ todo: IState }>) {
    this.profile$ = this.getProfile();
  }

  getProfile(): Observable<IState> {
    return this.store.select('todo');
  }

  updateProfile(): void {
    this.store.dispatch(updateProfile());
  }

  ngOnInit(): void {}
}
