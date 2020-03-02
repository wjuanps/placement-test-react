import { SAVE_ANSWER, TOGGLE_QUESTION } from "../types";

import { INITIAL_STATE, saveLocalStorage } from "./init";

export const placementReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case TOGGLE_QUESTION:
      state = {
        placement: state.placement, questionActive: action.index
      }
      break;
    case SAVE_ANSWER:
      let question = state.placement.questions[action.index];
      question.respondida = 1;
      question.resposta   = action.resposta;

      state.placement.questions[action.index] = question;

      state = {
        placement: state.placement, questionActive: action.index
      }
    break;
    default:
      return state;
  }

  saveLocalStorage(state);

  return state;
};
