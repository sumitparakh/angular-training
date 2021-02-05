import { createReducer, on } from '@ngrx/store';
import { updateProfile } from './profile.actions';

const initialState = { firstName: '', lastName: '' };

const updateUserProfile = (state: any, action: any) => {
  return {
    firstName: action.firstName,
    lastName: action.lastName,
  };
};

const profileAbstractReducer = createReducer(
  initialState,

  on(updateProfile, updateUserProfile)
);

export function profileReducer(state: any, action: any) {
  return profileAbstractReducer(state, action);
}
