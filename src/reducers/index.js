import { combineReducers } from 'redux';

import { placementReducer } from './question';
import { initPlacement } from './init';

const Reducers = combineReducers({
  placementReducer,
  initPlacement
});

export default Reducers;
