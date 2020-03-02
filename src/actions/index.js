export const initPlacementTest = (avaliacao, questoes) => {
  return {
    type: "INIT_PLACEMENT_TEST",
    avaliacao, questoes
  }
}

export const toggleQuestion = (index) => {
  return {
    type: "TOGGLE_QUESTION",
    index
  };
}

export const saveAnswer = (index, resposta) => {
  return {
    type: "SAVE_ANSWER",
    index, resposta
  }
}
