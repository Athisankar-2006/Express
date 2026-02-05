export const createUserValidationSchema = {
    user_name:{
        notEmpty: {
            errorMessage:"user name must not be empty"
        },
        isLength:{
            options: { min:3,  max:12},
            errorMessage: "user name length must be min 3 and max 12"
        },
        isString:{
            errorMessage: "user name must be as a string"
        }
    },
      age: {
        notEmpty: {
            errorMessage:" Age must not be empty"
        }
    }
}