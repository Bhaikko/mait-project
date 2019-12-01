import alertify from 'alertifyjs';

class Alertify {
    
    static error(message) {
        alertify.error(message);
    }

    static success(message) {
        alertify.success(message);
    }

    static message(message) {
        alertify.message(message);
    }

}

export default Alertify;