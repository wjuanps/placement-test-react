import React from "react";
import { connect } from "react-redux";

import Question from "../Question";

import { saveAnswer, updateState } from "../../../../actions/question";
import model from "../../../../models/placement";

const QuestionView = ({ state, dispatch }) => {
  const answer = async (i, alternative, questionId, alternativeId) => {
    updateState(true)(dispatch);

    const params = new URLSearchParams();
    params.append("placementKey", state.placement.id);
    params.append("answer", alternativeId);
    params.append("question", questionId);

    await model.placement.saveAnswer(params);

    saveAnswer(i, alternative)(dispatch);

    updateState(false)(dispatch);
  };

  return (
    <div className="row" id="questoes">
      {state?.placement?.questions?.map((question, i) => {
        return (
          <div
            key={question.id}
            className={`
                col-md-12
                caroucel
                ${i !== state?.questionActive ? "hidden" : ""}
              `}
          >
            <h3 className="mb-4">{question.enunciado}</h3>

            {question.alternativas.map(alternative => (
              <Question
                key={alternative.id}
                alternative={alternative}
                question={question}
                onClick={() =>
                  answer(
                    i,
                    alternative.alternativa,
                    question.id,
                    alternative.id
                  )
                }
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default connect(state => ({ state: state?.placementReducer }))(
  QuestionView
);
