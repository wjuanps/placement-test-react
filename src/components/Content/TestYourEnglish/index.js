import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import QuestionsView from "./QuestionView";
import Indicator from "./Indicator";

import { toggleQuestion } from "../../../actions/question";
import model from "../../../models/placement";

const Test = ({ state, dispatch }) => {
  const history = useHistory();

  const [finishing, setFinishing] = useState(false);

  if (
    state.placement.questions == null ||
    state.placement.questions === undefined
  ) {
    return <Redirect to="/register" />;
  }

  if (state.placement.result != null && state.placement.result !== undefined) {
    return <Redirect to={`/result/${state.placement.id}`} />;
  }

  const endPlacement = async () => {
    try {
      setFinishing(true);

      const params = new URLSearchParams();
      params.append("placement", localStorage.getItem("placement"));

      const response = await model.placement.endPlacement(params);
      const { id } = response.data;

      history.push(`/result/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>PLACEMENT TEST - BASIC</h2>

      <hr className="hr" />

      <div className="mt-4" id="test">
        <QuestionsView />

        <div className="row">
          <div className="col-md-12">
            <button
              id="end"
              className={`btn btn-success ${state.finished ? "" : "hidden"}`}
              onClick={endPlacement}
              disabled={finishing}
            >
              {finishing ? "Salvando Teste ..." : "Finalizar"}
            </button>

            <div className="float-right">
              <div className={`float-left ${!state.saving ? "hidden" : ""}`}>
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
