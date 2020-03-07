import { INIT_PLACEMENT_TEST } from "../types";

const placementInicialized = (avaliacao, questoes) => {
  return {
    type: INIT_PLACEMENT_TEST,
    avaliacao, questoes
  }
}

export const initPlacementTest = (avaliacao, questoes) =>
  dispatch => dispatch(placementInicialized(avaliacao, questoes));
