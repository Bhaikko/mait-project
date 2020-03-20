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
        touched: false
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
            placeholder: "Your Password, Min 8 Characters"
        },
        value: "",
        validation: {
            required: true,
            minLength: 8 
        },
        valid: false,
        touched: false 
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
            required: true
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
            minLength: 8
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
            minLength: 8
        },
        value: "",
        valid: false,
        touched: false 
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
            minLength: 8
        },
        value: "",
        valid: false,
        touched: false 
    }
}