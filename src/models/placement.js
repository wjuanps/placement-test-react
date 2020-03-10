/* eslint-disable no-return-await */
/* eslint-disable linebreak-style */
import api from "../services/api";

export default {
  placement: {
    create: async params =>
      await api.post("nivelamento/avaliacao/init", params),
    saveAnswer: params => api.post("nivelamento/avaliacao/saveAnswer", params)
  }
};
