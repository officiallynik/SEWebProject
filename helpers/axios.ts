import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.NODE_ENV === "production"? 'https://fathomless-tundra-87077.herokuapp.com': 
                                        'http://localhost:5000'
});

export default Axios;