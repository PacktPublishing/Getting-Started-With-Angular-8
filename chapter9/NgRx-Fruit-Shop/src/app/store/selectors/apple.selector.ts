import { createSelector } from '@ngrx/store';

import { ApplesState } from '../state/apples.state';

const selectApples = (state: ApplesState) => state;

export const selectApplesFromStore = createSelector(
  selectApples,
  (state: ApplesState) => state.applesCount
);
