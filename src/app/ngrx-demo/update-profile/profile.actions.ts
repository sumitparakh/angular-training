import { createAction, props } from '@ngrx/store';

export const updateProfile = createAction(
  '[Todo]::UPDATE_PROFILE',
  props<{ firstName: string; lastName: string }>()
);
