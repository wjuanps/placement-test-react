import { INIT_PLACEMENT_TEST } from "../types";

export const INITIAL_STATE = {
  questionActive: localStorage.getItem("questionActive") | 0,
  finished: !!parseInt(localStorage.getItem("finished")),
  placement: {
    id: localStorage.getItem("placement"),
    questions: JSON.parse(localStorage.getItem("questions")),
    result: JSON.parse(localStorage.getItem("result"))
  }
};

export const saveLocalStorage = state => {
  localStorage.setItem("finished", state.finished);
  localStorage.setItem("questionActive", state.questionActive);
  localStorage.setItem("placement", state.placement.id);
  localStorage.setItem("questions", JSON.stringify(state.placement.questions));
};

export const initPlacement = (state = {}, action = {}) => {
  switch (action.type) {
    case INIT_PLACEMENT_TEST:
      state = {
        questionActive: 0,
        finished: 0,
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
