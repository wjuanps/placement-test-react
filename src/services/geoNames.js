import api from "./api";

const getPlaces = async (current, callback) => {
  try {
    const value = current.value;

    let text =
      value === null || value === undefined || value === ""
        ? "Escolha ..."
        : "Carregando ...";

    callback([{ value: "", text }]);

    const gid = current.value.split(/_/)[1];
    let response = await api.get(`nivelamento/geonames/${gid}`);

    listPlaces(response.data, callback);
  } catch (error) {
    callback([{ value: "", text: "Erro ao carregar os dados" }]);
  }
};

const listPlaces = (response, callback) => {
  if (!!response.geonames && response.geonames.length > 0) {
    let options = response?.geonames.map(geoname => ({
      value: `${geoname.name}_${geoname.geonameId}`,
      text: geoname.name
    }));

    options.splice(0, 0, { value: "", text: "Escolha ..." });

    callback(options);
  }
};

export default getPlaces;
