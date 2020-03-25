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

const stateUpdated = (status, result) => {
  return {
    type: UPDATE_STATE,
    status,
    result
  };
};

export const saveAnswer = (index, resposta) => dispatch =>
  dispatch(answerSaved(index, resposta));

export const updateState = (status, result = null) => dispatch =>
  dispatch(stateUpdated(status, result));

export const toggleQuestion = index => dispatch =>
  dispatch(questionToggled(index));
