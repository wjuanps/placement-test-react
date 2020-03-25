import { INIT_PLACEMENT_TEST } from "../types";

const questions = JSON.parse(localStorage.getItem("questions"));

export const INITIAL_STATE = {
  questionActive: localStorage.getItem("questionActive") | 0,
  finished: !!questions
    ? questions.every(question => question.respondida === 1)
    : false,
  placement: {
    id: localStorage.getItem("placement"),
    result: JSON.parse(localStorage.getItem("result")),
    questions
  }
};

export const saveLocalStorage = state => {
  localStorage.setItem("finished", state.finished);
  localStorage.setItem("questionActive", state.questionActive);
  localStorage.setItem("placement", state.placement.id);
  localStorage.setItem("questions", JSON.stringify(state.placement.questions));
  localStorage.setItem("result", state.placement.result);
};

export const initPlacement = (state = {}, action = {}) => {
  switch (action.type) {
    case INIT_PLACEMENT_TEST:
      state = {
        questionActive: 0,
        finished: false,
        placement: {
          id: action.avaliacao,
          questions: action.questoes,
          result: null
        }
      };

      saveLocalStorage(state);
      break;
    default:
      return state;
  }

  return state;
};
