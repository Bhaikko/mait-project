import axios from 'axios';

const instance = axios.create({
    baseURL: "http://127.0.0.1:4000/api",
    
});

// adding token as default header
instance.defaults.headers['Authorization'] = (() => {
    const token = JSON.parse(localStorage.getItem("userdata"));
    return "JWT " + token.token;
})();


export default instance;