import axios from 'axios';
import Alertify from './utilities/Aleretify/Alertify';

const instance = axios.create({
    baseURL: "http://127.0.0.1:4000/api",
    
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
        console.log(error.response);
        if (!error.response.config.url.includes("/auth/login")) {
            Alertify.error("Try Refreshing The Page");
        }
    }
)


export default instance;