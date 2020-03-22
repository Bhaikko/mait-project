module.exports.EditProfileFormConfig = {
    about: {
        label: "Enter Your Bio",
        elementType: "textarea",
        elementConfig: {
            placeholder: "Your Bio",
        },
        value: "",
        valid: true,
        touched: false
    },
    relationshipStatus: {
        label: "Your Relationship Status",
        elementType: "select",
        elementConfig: {
            options: [
                "Single",
                "Taken"
            ]
        },
        value: "Single",
        valid: true,
        touched: false 
    },
    gender: {
        label: "Your Gender",
        elementType: "select",
        elementConfig: {
            options: [
                "Male",
                "Female"
            ]
        },
        value: "Male",
        valid: true,
        touched: false 
    },
    intrestedIn: {
        label: "Your Interest",
        elementType: "select",
        elementConfig: {
            options: [
                "Men",
                "Women"
            ]
        },
        value: "Men",
        valid: true,
        touched: false 
    },
    collegeName: {
        label: "Your College",
        elementType: "input",
        elementConfig: {
            placeholder: "Your College Name"
        },
        value: "",
        valid: true,
        touched: false 
    },
    age: {
        label: "Your Age",
        elementType: "input",
        elementConfig: {
            placeholder: "Your Age",
            type: "number"
        },
        validation: {
            min: 18
        },
        value: 18,
        valid: true,
        touched: false 
    }
}

module.exports.SubmitReportFormConfig = {
    report: {
        label: "Report Details",
        elementType: "textarea",
        elementConfig: {
            placeholder: "Report...",
        },
        validation: {
            required: true
        },
        value: "",
        valid: false,
        touched: false
    }
}