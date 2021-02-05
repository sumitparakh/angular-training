import { createReducer, on } from '@ngrx/store';
import { login } from './auth.actions';

const initialState = { loggedIn: false };

const OnLogin = (state: any, action: any) => {
  return { ...state, loggedIn: true };
};

const authAbstractReducer = createReducer(initialState, on(login, OnLogin));

export function authReducer(state: any, action: any) {
  return authAbstractReducer(state, action);
}
