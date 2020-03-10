import { SAVE_ANSWER, TOGGLE_QUESTION } from "../types";

const questionToggled = index => {
  return {
    type: TOGGLE_QUESTION,
    index
  };
};

const answerSaved = (index, resposta, questionId, respostaId) => {
  return {
    type: SAVE_ANSWER,
    index,
    resposta,
    questionId,
    respostaId
  };
};

export const saveAnswer = (
  index,
  resposta,
  questionId,
  respostaId
) => dispatch => dispatch(answerSaved(index, resposta, questionId, respostaId));

export const toggleQuestion = index => dispatch =>
  dispatch(questionToggled(index));
