import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://fathomless-tundra-87077.herokuapp.com'
});

export default Axios;