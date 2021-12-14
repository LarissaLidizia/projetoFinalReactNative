import axios from 'axios';

const herokuApi = axios.create({
    baseURL: 'https://projetogrupo4.herokuapp.com/'
});

export default herokuApi;