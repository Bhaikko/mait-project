class UserDetail {

    static parse_token = token => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    
    }

    static userdata = localStorage.getItem("userdata") ? this.parse_token(localStorage.getItem("userdata")).data : null;

    static _reset() {
        this.userdata = localStorage.getItem("userdata") ? this.parse_token(localStorage.getItem("userdata")).data : null;
    }

    static get_userdata = () => {
        if (!this.userdata) {
            this._reset();
        }
        return this.userdata;
    }

    static get_token = () => {
        if (!this.userdata) {
            this._reset();
        }

        return JSON.parse(localStorage.getItem("userdata")).token;
    }

    static get_name = () => {
        if (!this.userdata) {
            this._reset();
        }

        return this.userdata.name;
    }

    static get_username = () => {
        if (!this.userdata) {
            this._reset();
        }

        return this.userdata.username;
    }
    static get_userId () {
        if (!this.userdata) {
            this._reset();
        }

        return this.userdata.id
    }
    static get_email () {
        if (!this.userdata) {
            this._reset();
        }

        return this.userdata.email
    }

    static get_verified() {
        if (!this.userdata) {
            this._reset();
        }
        return this.userdata.isVerified;
    }

    static clear_userdata() {
        this.userdata = null;
    }


}

export default UserDetail;