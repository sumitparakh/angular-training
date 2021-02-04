import { IState } from './ngrx-reducer';

export const fetchData = (state: IState) => {
  const tasks = [1];
  state = {
    ...state,
    tasks,
  };
  return state;
};
export const addTask = (state: any) => state;
export const removeTask = (state: any) => state;

export const updateUserProfile = (state: IState) => {
  console.log({ updateUserProfile: state });

  state = {
    ...state,
    profile: {
      firstName: 'Mahesh',
    },
  };
  return state;
};
