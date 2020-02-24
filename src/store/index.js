import { createStore } from 'redux';

const INITIAL_STATE = {
  questionActive: localStorage.getItem('questionActive') | 0,
  placement: {
    id: localStorage.getItem('placement'),
    questions: JSON.parse(localStorage.getItem('questions')),
    result: JSON.parse(localStorage.getItem('result')),
  }
}

function saveLocalStorage(state) {
  localStorage.setItem('questionActive', state.questionActive);
  localStorage.setItem('placement', state.placement.id);
  localStorage.setItem('questions', JSON.stringify(state.placement.questions));
}

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_QUESTION":
      state = {
        placement: state.placement, questionActive: action.index
      }
      break;
    case "SAVE_ANSWER":
      let question = state.placement.questions[action.index];
      question.respondida = 1;
      question.resposta   = action.resposta;
  
      state.placement.questions[action.index] = question;
  
      state = {
        placement: state.placement, questionActive: action.index
      }
    break;
    default:
      break;
  }

  saveLocalStorage(state);

  return state;
};

const store = createStore(reducer);

export default store;
