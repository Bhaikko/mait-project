import alertify from 'alertifyjs';

class Alertify {
    
    static error(message) {
        alertify.error(message);
    }

    static success(message) {
        alertify.success(message);
    }

}

export default Alertify;