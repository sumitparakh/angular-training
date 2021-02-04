import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { IJson } from '../core/types';
import { add, fetch, remove, updateProfile } from './ngrx-actions';
import { addTask, fetchData, removeTask, updateUserProfile } from './ngrx-state.update';

export interface IState {
  tasks: any[];
  profile: IJson;
}

const initialState = {
  tasks: [],
  profile: {
    firstName: 'Sumit',
    lastName: 'Parakh',
  },
};

const appReducer = createReducer(
  initialState,
  on(fetch, fetchData),
  on(add, addTask),
  on(remove, removeTask),
  on(updateProfile, updateUserProfile)
);

/**
 * Signature of reducer function is same in both angular(NgRx) and react-redux
 * with state and action parameters
 */
export function todoReducer(
  state: IState,
  action: Action
): ActionReducer<IState, Action> {
  return appReducer(state, action);
}
