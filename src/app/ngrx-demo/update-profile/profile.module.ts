import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './profile.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('profile', profileReducer)],
})
export class ProfileModule {}
