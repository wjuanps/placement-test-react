import React from 'react';
import { connect } from 'react-redux';

import Question from '../Question';

import { saveAnswer } from '../../../../actions';

const QuestionView = ({ state, dispatch }) => {
  return (
    <div className="row" id="questoes">
      {
        state?.placement?.questions?.map((question, i) => {
          return (
            <div
              key={question.id}
              className={`
                col-md-12
                caroucel
                ${ (i !== state?.questionActive) ? 'hidden' : '' }
              `}>

              <h3 className="mb-4">{question.enunciado}</h3>

              {question.alternativas.map(
                alternative =>
                  <Question
                    key={alternative.id}
                    alternative={alternative}
                    question={question}
                    onClick={() => dispatch(saveAnswer(i, alternative.alternativa))} />
                )}
            </div>
          );
        })
      }
    </div>
  );
}

export default connect(state => ({ state: state?.placementReducer }))(QuestionView);
