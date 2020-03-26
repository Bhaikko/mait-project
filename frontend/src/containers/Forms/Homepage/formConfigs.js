module.exports.SignupFormConfig = {
    name: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Your Full Name",
        },
        value: "",
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    username: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Your Username",
        },
        value: "",
        validation: {
            required: true,
            isUsername: true
        },
        valid: false,
        touched: false,
        tooltip: "Username Cannot Have Any Special Characters."
    },
    email: {
        elementType: "input",
        elementConfig: {
            type: "email",
            placeholder: "Your Email",
        },
        value: "",
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    password: {
        elementType: "input",
        elementConfig: {
            type: "password",
            min: "8",
            placeholder: "Your Password"
        },
        value: "",
        validation: {
            required: true,
            minLength: 8,
            isPassword: true 
        },
        valid: false,
        touched: false ,
        tooltip: "Passwords Should Have Length 8, One Uppercase Letter, One Lowercase Letter, One Digit."
    }
}

module.exports.LoginFormConfig = {
    email: {
        elementType: "input",
        elementConfig: {
            type: "email",
            placeholder: "Enter Your Email",
        },
        value: "",
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    password: {
        elementType: "input",
        elementConfig: {
            type: "password",
            placeholder: "Enter Your Password"
        },
        value: "",
        validation: {
            required: true,
            isPassword: true
        },
        valid: false,
        touched: false 
    }
}

module.exports.ForgetPasswordFormConfig = {
    email: {
        elementType: "input",
        elementConfig: {
            type: "email",
            placeholder: "Enter Your Email",
        },
        value: "",
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    username: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Enter Your Username",
        },
        value: "",
        validation: {
            required: true,
            isUsername: true
        },
        valid: false,
        touched: false
    }
}

module.exports.ChangePasswordFormConfig = {
    oldPassword: {
        label: "Enter Your Last Password",
        elementType: "input",
        elementConfig: {
            placeholder: "Last Password",
            type: "password"
        },
        validation: {
            required: true,
            minLength: 8,
            isPassword: true
        },
        value: "",
        valid: false,
        touched: false
    },
    newPassword: {
        label: "Enter Your New Password",
        elementType: "input",
        elementConfig: {
            placeholder: "New Password",
            type: "password"
        },
        validation: {
            required: true,
            minLength: 8,
            isPassword: true
        },
        value: "",
        valid: false,
        touched: false,
        tooltip: "Passwords Should Have Length 8, One Uppercase Letter, One Lowercase Letter, One Digit." 
    },
    confirmPassword: {
        label: "Retype Your New Password",
        elementType: "input",
        elementConfig: {
            placeholder: "Retype New Password",
            type: "password"
        },
        validation: {
            required: true,
            minLength: 8,
            isPassword: true
        },
        value: "",
        valid: false,
        touched: false
    }
}