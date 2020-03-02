import React, { useState } from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";

import getPlaces from "../../../services/geoNames";

import { Input, Select } from "../../Form";

import model from "../../../models/placement";

const Register = ({ history }) => {
  const initialData = [{ value: "", text: "Escolha ..." }];
  const countries = [
    { value: "brazil_3469034", text: "Brasil" },
    { value: "usa_6252001", text: "Estados Unidos" },
    { value: "japan_1861060", text: "Japão" }
  ];

  const [states, setStates] = useState(initialData);
  const [cities, setCitites] = useState(initialData);

  async function handleSubmit(data, { reset }) {
    try {
      data.pais = data.pais.split(/_/)[0];
      data.estado = data.estado.split(/_/)[0];
      data.cidade = data.cidade.split(/_/)[0];

      const params = new URLSearchParams();
      params.append("data", JSON.stringify(data));

      const response = await model.placement.create(params);
      const { avaliacao, questoes } = response.data;

      if (!!avaliacao && questoes) {
        localStorage.setItem("placement", avaliacao);
        localStorage.setItem("questions", JSON.stringify(questoes));

        reset();
        history.push("/test-your-english");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h2>PLACEMENT TEST - BASIC</h2>
      <hr className="hr mb-5" />

      <Form
        onSubmit={handleSubmit}
        method="post"
        className="p-5"
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, .08)" }}
      >
        <div className="form-row mb-3">
          <div className="form-group col-md-4">
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              name="nome"
              type="text"
              className="form-control"
              placeholder="Nome"
              required="required"
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="email">Email</label>
            <Input
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
            <Input
              type="phone"
              className="form-control"
              name="whatsapp"
              id="phone"
              placeholder="Telefone"
              required="required"
            />
          </div>
        </div>

        <div className="form-row mb-3">
          <div className="form-group col-md-4">
            <label htmlFor="country">País</label>
            <Select
              onChange={event => getPlaces(event.currentTarget, setStates)}
              id="country"
              name="pais"
              className="form-control"
              required="required"
              defaultValue=""
            >
              <option value="">Escolha...</option>

              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.text}
                </option>
              ))}
            </Select>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="state">Estado</label>
            <Select
              onChange={event => getPlaces(event.currentTarget, setCitites)}
              id="state"
              name="estado"
              className="form-control"
              required="required"
              defaultValue=""
            >
              {states.map(state => (
                <option key={state.value} value={state.value}>
                  {state.text}
                </option>
              ))}
            </Select>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="city">Cidade</label>
            <Select
              id="city"
              name="cidade"
              className="form-control"
              required="required"
              defaultValue=""
            >
              {cities.map(city => (
                <option key={city.value} value={city.value}>
                  {city.text}
                </option>
              ))}
            </Select>
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
      </Form>
    </>
  );
};

export default Register;
