import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IState } from '../ngrx-reducer';
import { updateProfile } from './profile.actions';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
  profile$: Observable<any>;

  profile = {
    firstName: '',
    lastName: '',
  };

  constructor(private store: Store<{ profile: any }>) {
    this.profile$ = this.getProfile();
  }

  getProfile(): Observable<IState> {
    return this.store.select('profile');
  }

  updateProfile(): void {
    this.store.dispatch(updateProfile(this.profile));
  }

  ngOnInit(): void {}
}
