module.exports.required = value => {
    return value.trim() !== "";
}

module.exports.isUsername = value => {
    // eslint-disable-next-line
    const pattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return !pattern.test(value);
}

module.exports.isEmail = value => {
    // eslint-disable-next-line
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
    return pattern.test(value);
}

module.exports.minLength = (value, minLength) => {
    return value.trim().length > minLength;
}


module.exports.isPhone = value => {
    return value.length === 10;
}

module.exports.min = (value, minValue) => {
    return value >= minValue;
}

module.exports.isPassword = value => {
    if (value.length < 8) {
        return false;
    } 
    
    const checkList = {
        hasUpperCaseLetter: false,
        hasLowerCaseLetter: false,
        hasNumber: false
    }

    for (let i = 0; i < value.length; i++) {
        if (!checkList.hasLowerCaseLetter) {
            if (value[i] >= 'a' && value <= 'z') {
                checkList.hasLowerCaseLetter = true;
            }
        }

        if (!checkList.hasUpperCaseLetter) {
            if (value[i] >= 'A' && value[i] <= 'Z') {
                checkList.hasUpperCaseLetter = true;
            }
        }

        if (!checkList.hasNumber) {
            if (value[i] <= '9' && value[i] >= '0') {
                checkList.hasNumber = true;
            }
        }
    }

    if (!checkList.hasUpperCaseLetter || !checkList.hasLowerCaseLetter || !checkList.hasNumber) {
        return false;
    }


    return true;
    
}