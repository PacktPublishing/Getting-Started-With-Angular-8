import { ActionTypes, ActionUnion } from '../actions/manage-apples.actions';
import { Action } from '@ngrx/store';

export interface State {
  applesCount: number;
}

export const initialState: State = {
  applesCount: 1
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.SaveApples: {
      console.log(state);
      return {
        ...state,
        applesCount: state.applesCount + 1
      };
    }

    case ActionTypes.RemoveApple: {
      console.log(state);
      return {
        ...state,
        applesCount: state.applesCount - 1
      };
    }

    case ActionTypes.RemoveAllApples: {
      console.log(state);
      return {
        ...state,
        applesCount: 0
      };
    }

    default: {
      console.log(state);
      return state;
    }
  }
}
