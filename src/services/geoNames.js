import api from "./api";

const getPlaces = async (current, callback) => {
  callback([{ value: "", text: "Carregando ..." }]);

  const gid = current.value.split(/_/)[1];
  let response = await api.get(`geonames?gid=${gid}`);

  listPlaces(response.data, callback);
};

const listPlaces = (response, callback) => {
  if (!!response.geonames && response.geonames.length > 0) {
    let options = response.geonames.map(geoname => ({
      value: `${geoname.name}_${geoname.geonameId}`,
      text: geoname.name
    }));

    options.splice(0, 0, { value: "", text: "Escolha ..." });

    callback(options);
  }
};

export default getPlaces;
