import { combineReducers } from 'redux';

import { toggleQuestionReducer } from './toggleQuestionReducer';

export const Reducers = combineReducers({
  placementReducer: toggleQuestionReducer,
});
