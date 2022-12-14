

type UserType = {
    accountnumber: string,
    passportId: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
}

const Validator = (values: UserType) => {

        let errors = {
            accountnumber: "",
            passportId: "",
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        };
        //validate username
        if (!values.accountnumber) {
            errors.accountnumber = "Account Number Is Required";
        } else if (values.accountnumber.length != 16) { 
            errors.accountnumber = "Account Number Must Be 16 characters";
        }
        //validate passportId
        if (!values.passportId) {
            errors.passportId = "passport / Id Is Required";
        } else if (values.passportId.length < 8 || values.password.length > 9) {
            errors.passportId = "Password Must Be Between 8 and 9 Characters"
        }
        //validate firstname
        if (!values.firstname) {
            errors.firstname = "First Name Is Required";
        }
        //validate lastname
        if (!values.lastname) {
            errors.lastname = "Last Name Is Required";
        }
        //validate email
        if (!values.email) {
            errors.email = "E-mail is required";
        } else if (!values.email.includes("@")) {
            errors.email = "E-mail must contain '@' and a '.'"
        }
        //validate password
        if (!values.password) {
            errors.password = "Password Required";
        } else if (values.password.length < 8 || values.password.length > 16) {
            errors.password = "Password Must Be Between 8 and 16 characters"
        }

        return (errors)
    };


export default Validator; 
;