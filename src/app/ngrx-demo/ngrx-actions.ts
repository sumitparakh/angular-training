import { createAction } from '@ngrx/store';

export const fetch = createAction('[Todo]::FETCH_DATA');
export const add = createAction('[Todo]::ADD');
export const remove = createAction('[Todo]::REMOVE');
