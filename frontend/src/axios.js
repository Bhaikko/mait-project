import axios from 'axios';
import Alertify from './utilities/Aleretify/Alertify';
import { SERVER_URL } from './environments';

const instance = axios.create({
    baseURL: SERVER_URL + "/api",
    
});

// adding token as default header
instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = (() => {
            const token = JSON.parse(localStorage.getItem("userdata"));
            if (token) {
                return "JWT " + token.token;
            } else {
                return null;
            }
        })();
        return config;
    },
    error => {
        console.log(error);
    }
)

instance.interceptors.response.use(
    response => response,
    error => {
        Alertify.error(error.response.data.message);
        // if (!error.response.config.url.includes("/auth")) {
        //     Alertify.error("Try Refreshing The Page");
        // }

        return error;
    }
)


export default instance;