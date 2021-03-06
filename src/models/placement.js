/* eslint-disable no-return-await */
/* eslint-disable linebreak-style */
import api from "../services/api";

export default {
  placement: {
    create: async params =>
      await api.post("nivelamento/avaliacao/init", params),
    saveAnswer: async params =>
      await api.post("nivelamento/avaliacao/saveAnswer", params),
    endPlacement: async params =>
      api.post("nivelamento/avaliacao/end-placement", params),
    getResult: async placement =>
      await api.get(`nivelamento/avaliacao/result/${placement}`)
  }
};
