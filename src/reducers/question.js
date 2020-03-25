import { UPDATE_STATE, SAVE_ANSWER, TOGGLE_QUESTION } from "../types";

import { INITIAL_STATE, saveLocalStorage } from "./init";

export const placementReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case TOGGLE_QUESTION:
      state = {
        ...state,
        placement: state.placement,
        questionActive: action.index
      };
      break;
    case SAVE_ANSWER:
      let question = state.placement.questions[action.index];
      question.respondida = 1;
      question.resposta = action.resposta;

      state.placement.questions[action.index] = question;

      let finished = state.placement.questions.every(
        question => question.respondida === 1
      );

      state = {
        ...state,
        placement: state.placement,
        questionActive: action.index,
        finished
      };
      break;
    case UPDATE_STATE:
      console.log(state);
      state = {
        ...state,
        saving: action.status,
        placement: {
          ...state.placement,
          result: action.result
        }
      };
      break;
    default:
      return state;
  }

  saveLocalStorage(state);

  return state;
};
