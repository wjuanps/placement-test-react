import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import QuestionsView from "./QuestionView";
import Indicator from "./Indicator";

import { toggleQuestion } from "../../../actions/question";

const Test = ({ state, dispatch }) => {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  if (
    state.placement.questions == null ||
    state.placement.questions === undefined
  ) {
    return <Redirect to="/register" />;
  }

  return (
    <>
      <h2>PLACEMENT TEST - BASIC</h2>

      <hr className="hr" />

      <div className={`row ${!loading ? "hidden" : ""}`} id="loading">
        <lottie-player
          className="mx-auto hidden"
          src="https://assets2.lottiefiles.com/packages/lf20_BH43lc.json"
          background="transparent"
          speed="1"
          style={{ width: "400px", height: "400px" }}
          loop
          autoplay
        ></lottie-player>
      </div>

      <div className="mt-4" id="test">
        <QuestionsView />

        <div className="row">
          <div className="col-md-12">
            <button
              id="end"
              className={`btn btn-success ${state.finished ? "" : "hidden"}`}
            >
              Finalizar
            </button>

            <div className="float-right">
              <div className={`float-left ${!saving ? "hidden" : ""}`}>
                <lottie-player
                  id="loadingAnswer"
                  src="https://assets2.lottiefiles.com/packages/lf20_BADN8W/31 - Loading 4.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "50px", height: "50px", marginTop: "-6.2px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <div
                className="btn-group mb-4"
                role="group"
                aria-label="Basic example"
              >
                <button
                  id="previous"
                  type="button"
                  onClick={() =>
                    toggleQuestion(state?.questionActive - 1)(dispatch)
                  }
                  disabled={state?.questionActive === 0}
                  className="btn btn-primary"
                >
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button
                  id="next"
                  type="button"
                  onClick={() =>
                    toggleQuestion(state?.questionActive + 1)(dispatch)
                  }
                  disabled={
                    state?.questionActive ===
                    state?.placement.questions?.length - 1
                  }
                  className="btn btn-primary"
                >
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center mb-5" id="indicator">
          <ul className="dots-container col-md-12" role="navigation">
            {state?.placement?.questions?.map((question, i) => {
              return (
                <Indicator
                  index={i}
                  key={question.id}
                  question={question}
                  questionActive={state.questionActive}
                  length={state?.placement?.questions?.length}
                  onClick={() => toggleQuestion(i)(dispatch)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default connect(state => ({ state: state.placementReducer }))(Test);
