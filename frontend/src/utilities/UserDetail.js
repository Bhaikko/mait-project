class UserDetail {

    static get_token = () => {
        return JSON.parse(localStorage.getItem("userdata"));
    }

    static get_username = () => {
        return JSON.parse(localStorage.getItem("userdata")).username;
    }
    static get_userId () {
        return JSON.parse(localStorage.getItem("userdata")).userId;
    }
    static get_email () {
        return JSON.parse(localStorage.getItem("userdata")).email;
    }

    static get_verified() {
        return JSON.parse(localStorage.getItem('userdata')).isVerified;
    }


}

export default UserDetail;