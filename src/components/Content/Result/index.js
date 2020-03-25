import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import model from "../../../models/placement";
import { updateState } from "../../../actions/question";

const Result = ({ state, dispatch }) => {
  const [result, setResult] = useState({});
  const [url, setUrl] = useState("");

  const { placement } = useParams();

  const progress = useRef(null);

  useEffect(() => {
    async function fetchResult() {
      const response = await model.placement.getResult(placement);
      let { percent, total, url } = response.data;

      setUrl(url);
      setResult({ percent, total });
      updateState(false, JSON.stringify(result))(dispatch);

      var myVar = setInterval(myTimer, 1);

      var i = 1;

      function myTimer() {
        i += 1;

        if (i <= percent) {
          progress.current.style.width = `${i}%`;
        } else {
          myStopFunction();
        }
      }

      function myStopFunction() {
        clearInterval(myVar);
      }
    }

    fetchResult();
  }, [placement, dispatch, result]);

  return (
    <>
      <h2>PLACEMENT TEST - BASIC</h2>

      <hr className="hr" />

      <div className="align-middle text-center">
        <h3 className="mt-4">Seu resultado / Your result:</h3>

        <div className="w-50 row mx-auto mt-4">
          <div className="col-md-8 mb-4">
            <div className="progress">
              <div
                ref={progress}
                id="progress"
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div style={{ marginTop: "-10px" }} className="col-md-4">
            <span className="font-weight-bold" style={{ fontSize: "18pt" }}>
              {result.total}
              <span className="font-weight-light">/</span> 50
            </span>
          </div>
        </div>

        <div className="w-50 row mx-auto mt-4">
          <h5 className="text-info font-weight-bold">
            {result.percent <= 30
              ? "Your level is Beginner - Module One / Módulo 1"
              : ""}
            {result.percent > 30 && result.percent <= 48
              ? "Your level is Elementary - Module One / Módulo 1"
              : ""}
            {result.percent > 48 && result.percent <= 84
              ? "Your level is Pre-Intermediate - Module Two / Módulo 2"
              : ""}
            {result.percent > 84 && result.percent <= 98
              ? "Your level is Intermediate - Module Three / Módulo 3"
              : ""}
            {result.percent > 98
              ? "Your level is Upper-Intermediate - Module Four / Módulo 4"
              : ""}
          </h5>
        </div>

        <div className="row w-50 mx-auto mt-5">
          <button
            onClick={() => window.open(url)}
            target="_blank"
            className="btn btn-danger btn-block text-uppercase p-2"
            style={{ borderRadius: 0 }}
          >
            Matricule-se agora e ganhe um desconto
          </button>
        </div>

        <div className="row w-50 mx-auto mt-3">
          {/* <a
          className="btn btn-primary col-md-6 text-uppercase"
          style="border-radius: 0"
          href="https://www.facebook.com/sharer/sharer.php?u=example.org"
          target="_blank">
          <i className="fa fa-facebook"></i> &nbsp;&nbsp;&nbsp; compartilhar
        </a> */}

          <button
            id="suporte"
            className="btn btn-success col-md-12 text-uppercase"
            style={{ borderRadius: 0 }}
            onClick={() => window.open("https://wa.me/5511942025955")}
          >
            <i className="fa fa-whatsapp" aria-hidden="true"></i>{" "}
            &nbsp;&nbsp;&nbsp; fale conosco
          </button>
        </div>
      </div>
    </>
  );
};

export default connect(state => ({ state: state.placementReducer }))(Result);
