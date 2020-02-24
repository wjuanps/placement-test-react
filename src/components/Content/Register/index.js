import React, { useState } from "react";
import { Link } from "react-router-dom";

import getPlaces from "../../../services/geoNames";

const Register = () => {
  const countries = [
    { value: "brazil_3469034", text: "Brasil" },
    { value: "usa_6252001", text: "Estados Unidos" },
    { value: "japan_1861060", text: "Japão" }
  ];

  const [states, setStates] = useState([{ value: "", text: "Escolha ..." }]);
  const [cities, setCitites] = useState([{ value: "", text: "Escolha ..." }]);

  return (
    <>
      <h2>PLACEMENT TEST - BASIC</h2>
      <hr className="hr mb-5" />

      <form
        id="form"
        action="/store"
        method="post"
        className="p-5"
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, .08)" }}
      >
        <div className="form-row mb-3">
          <div className="form-group col-md-4">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Nome"
              required="required"
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              required="required"
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="phone">Telefone</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Telefone"
              required="required"
            />
          </div>
        </div>

        <div className="form-row mb-3">
          <div className="form-group col-md-4">
            <label htmlFor="country">País</label>
            <select
              onChange={event => getPlaces(event.currentTarget, setStates)}
              id="country"
              name="country"
              className="form-control"
              required="required"
              defaultValue={""}
            >
              <option value="">Escolha...</option>

              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.text}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="state">Estado</label>
            <select
              onChange={event => getPlaces(event.currentTarget, setCitites)}
              id="state"
              name="state"
              className="form-control"
              required="required"
              defaultValue={""}
            >
              {states.map(state => (
                <option key={state.value} value={state.value}>
                  {state.text}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="city">Cidade</label>
            <select
              id="city"
              name="city"
              className="form-control"
              required="required"
              defaultValue={""}
            >
              {cities.map(city => (
                <option key={city.value} value={city.value}>
                  {city.text}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group mb-4">
          <h6>
            Ao me cadastrar, confirmo que lí e aceito os{" "}
            <Link to="#">Termos de Uso</Link> e as{" "}
            <Link to="#">Politicas de Privacidade</Link>
          </h6>
        </div>

        <button type="submit" id="buttonInitTest" className="btn btn-primary">
          INICIAR TESTE
        </button>
      </form>
    </>
  );
};

export default Register;
