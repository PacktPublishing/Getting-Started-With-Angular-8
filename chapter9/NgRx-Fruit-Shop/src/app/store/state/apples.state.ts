import { Apples } from 'src/app/models/apples';

export interface ApplesState  {
  applesCount: number;
}

export const initialState: ApplesState = {
  applesCount: 0
};
