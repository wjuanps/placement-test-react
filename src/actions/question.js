import { UPDATE_STATE, SAVE_ANSWER, TOGGLE_QUESTION } from "../types";

const questionToggled = index => {
  return {
    type: TOGGLE_QUESTION,
    index
  };
};

const answerSaved = (index, resposta) => {
  return {
    type: SAVE_ANSWER,
    index,
    resposta
  };
};

const stateUpdated = status => {
  return {
    type: UPDATE_STATE,
    status
  };
};

export const saveAnswer = (index, resposta) => dispatch =>
  dispatch(answerSaved(index, resposta));

export const updateState = status => dispatch => dispatch(stateUpdated(status));

export const toggleQuestion = index => dispatch =>
  dispatch(questionToggled(index));
