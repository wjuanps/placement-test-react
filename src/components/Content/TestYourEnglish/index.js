import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {

  return (
    <div className="w-75 mx-auto mt-5">
      <h2>PLACEMENT TEST - BASIC</h2>

      <hr className="hr" />

      <div className="row hidden" id="loading">
        <lottie-player
          className="mx-auto hidden"
          src="https://assets2.lottiefiles.com/packages/lf20_BH43lc.json" 
          background="transparent"
          speed="1"
          style={{ width: '400px', height: '400px' }}
          loop  autoplay >

        </lottie-player>
    </div>

      <div className="mt-4" id="test">
        <QuestionsView />

        <div className="row">
          <div className="col-md-12">

            <button id="end" className="btn btn-success hidden">Finalizar</button>

            <div className="float-right">
              <lottie-player
                id="loadingAnswer"
                className="float-left hidden"
                src="https://assets2.lottiefiles.com/packages/lf20_BADN8W/31 - Loading 4.json"  
                background="transparent"  
                speed="1"  
                style={{ width: '50px', height: '50px', marginTop: '-6.2px' }}
                loop  autoplay >
              </lottie-player>

              <div className="btn-group mb-4" role="group" aria-label="Basic example">
                <button 
                  id="previous" 
                  type="button" 
                  className="btn btn-primary">
                  
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button 
                  id="next" 
                  type="button" 
                  className="btn btn-primary">
                  
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center mb-5" id="indicator">
          <ul className="dots-container col-md-12" role="navigation">
            <Indicator indicators={[1, 2, 3, 4]} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export const QuestionsView = () => (
  <div className="row" id="questoes">
    <div className="col-md-12 caroucel">
      <h3 className="mb-4">Whats your name?</h3>

      <Question questions={[1, 2, 3, 4]} />
    </div>
  </div>
);

export const Question = ({ questions }) => (
  questions.map((question, i) =>
    <div className="inputGroup" key={i}>
      <input
        id={i} 
        name={'radioo_' + i} 
        className="alternativas" 
        type="radio" />
      <label htmlFor={i}>{question}</label>
    </div>
  )
);

export const Indicator = ({ indicators }) => (
  indicators.map((indicator, i) => 
    <li className="progress-item" key={i}>
      <Link 
          to="#" 
          className="progress-dot indicator" 
          title="Question 10 of 15" 
          tabIndex="-1">
      </Link>
    </li> 
  )
);

export default Test;
