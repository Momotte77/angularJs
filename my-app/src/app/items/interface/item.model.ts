import { State } from '../enum/state.enum';

export interface Item {
  name: string;
  reference: string;
  state: State;
}
