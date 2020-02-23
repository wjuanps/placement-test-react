import { createStore } from 'redux';

const INITIAL_STATE = {
  id: localStorage.getItem('placement'),
  questions: localStorage.getItem('questions'),
  result: JSON.parse(localStorage.getItem('result')),
}

function reducer (state = INITIAL_STATE, actions) {
  return state;
};

const store = createStore(reducer);

export default store;
