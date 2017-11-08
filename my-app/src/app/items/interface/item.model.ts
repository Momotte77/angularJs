import { State } from '../enum/state.enum';

export interface Item {
  // key: string;
  name: string;
  reference: string;
  state: State;
}
