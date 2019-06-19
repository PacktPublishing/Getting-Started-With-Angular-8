import * as appleReducer from './apples-reducer';
import { ApplesState } from '../state/apples.state';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
  apples: appleReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  apples: appleReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = [];
