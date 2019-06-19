import { Action } from '@ngrx/store';
import { Apples } from '../../models/apples';

export enum ActionTypes {
  SaveApples = 'Save Apples',
  RemoveApple = 'Remove Apple',
  RemoveAllApples = 'Remove All Apples'
}

export class SaveApples implements Action {
  readonly type = ActionTypes.SaveApples;
  constructor(public payload: Apples) {}
}

export class RemoveApples implements Action {
  readonly type = ActionTypes.RemoveApple;
  constructor(public payload: Apples) {}
}

export class RemoveAllApples implements Action {
  readonly type = ActionTypes.RemoveAllApples;
  constructor(public payload: Apples) {}
}

// This is used in the Reducer as a list of the Actions it can support
export type ActionUnion = SaveApples | RemoveApples | RemoveAllApples;
