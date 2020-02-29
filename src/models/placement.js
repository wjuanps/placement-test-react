import axios from 'axios';

const baseUrl = "http://localhost:8000/api/";

export default {
    placement: {
        create: async (params) => 
            await axios.post(`${ baseUrl }nivelamento/avaliacao/create`, params)
    }
}
