import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ placement }) => {
  return (
    <>
      <h2>PLACEMENT TEST</h2>

      <hr className="hr" />

      <div className="row">
        <div className="col-md-4 mb-2">
          <div className="card">
            <h5 className="card-header bg-primary text-white text-right">
              INFORMATION
            </h5>
            <img
              className="card-img-top img-fluid"
              src="https://lms.really.school/sites/default/files/2020-01/placement_test.png"
              alt=""
            />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa fa-clock-o" aria-hidden="true"></i> Length{" "}
                <span className="float-right">30 minutes</span>
              </li>
              <li className="list-group-item">
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                Subject <span className="float-right">Test</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <h5 className="card-header bg-primary text-white text-right">
              ABOUT THIS TRAINING
            </h5>
            <div className="card-body">
              <p className="card-text">
                Agora você irá realizar seu <strong>Placement Test</strong> ou{" "}
                <strong>Teste de Nivelamento</strong>.
              </p>
              <p className="card-text">
                Faça a prova com calma e em um ambiente tranquilo.
              </p>
              <p className="card-text">
                Você terá até 30 minutos para responder a 50 perguntas.
              </p>
              <p className="card-text">
                Se você queira deixar alguma pergunta para responder depois,
                observe as marcas(<strong>•••••••••••</strong>) que indicam a(s)
                pergunta(s) que faltam. Para voltar, basta clicar nas bolinhas
                não marcadas.
              </p>
              <p className="card-text">
                Após responder a última pergunta, clique em{" "}
                <strong>FINISH</strong> para finalizar o teste.
              </p>
              <p className="card-text">Boa Prova</p>
            </div>

            <div className="card-footer">
              <div className="row" id="button">
                {placement.questions != null &&
                placement.questions !== undefined ? (
                  <>
                    <InitTestButton
                      style={{ borderRadius: 0 }}
                      className="btn btn-primary col-md-6"
                    />
                    {placement.result != null &&
                    placement.result !== undefined ? (
                      <ViewResultTestButton
                        placement={placement.id}
                        style={{ borderRadius: 0 }}
                        className="btn btn-success col-md-6"
                      />
                    ) : (
                      <ContinueTestButton
                        style={{ borderRadius: 0 }}
                        className="btn btn-success col-md-6"
                      />
                    )}
                  </>
                ) : (
                  <InitTestButton
                    style={{ borderRadius: 0 }}
                    className="btn btn-primary col-md-12"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const InitTestButton = props => (
  <Link to="/register" {...props}>
    INICIAR NOVO TESTE
  </Link>
);

export const ContinueTestButton = props => (
  <Link to="/test-your-english" {...props}>
    CONTINUAR TESTE
  </Link>
);

export const ViewResultTestButton = props => (
  <button
    onClick={() => window.open(`/result/${props.placement}`, "_self")}
    {...props}
  >
    VISUALIZAR RESULTADO
  </button>
);

export default connect(state => ({
  placement: state.placementReducer.placement
}))(Home);
