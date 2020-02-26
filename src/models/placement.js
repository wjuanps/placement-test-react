import axios from 'axios';

import api from '../services/api';

const baseUrl = "http://localhost:8000/api/";

export default {
    placement: {
        signup: async (params) => 
            await api.post(`nivelamento/avaliacao/create`, params)
    }
}
