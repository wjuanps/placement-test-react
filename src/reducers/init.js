import { INIT_PLACEMENT_TEST } from "../types";

export const INITIAL_STATE = {
  questionActive: localStorage.getItem('questionActive') | 0,
  placement: {
    id: localStorage.getItem('placement'),
    questions: JSON.parse(localStorage.getItem('questions')),
    result: JSON.parse(localStorage.getItem('result')),
  }
}

export const saveLocalStorage = (state) => {
  localStorage.setItem('questionActive', state.questionActive);
  localStorage.setItem('placement', state.placement.id);
  localStorage.setItem('questions', JSON.stringify(state.placement.questions));
}

export const initPlacement = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case INIT_PLACEMENT_TEST:
      state = {
        ...state,
        placement: {
          id: action.avaliacao,
          questions: action.questoes,
        }
      }
      break;
    default:
      return state;
  }

  saveLocalStorage(state);
  
  return state;
}
