const { body, validationResult } = require("express-validator");

exports.register = [
    body("fname").isString().trim().withMessage("Invalid Name"),
    body("lname").isString().trim().withMessage("Invalid Last Name"),
    body("email").isEmail().trim().withMessage("Invalid email"),
    body("birthdate").isDate().trim().withMessage("Invalid Birthdate"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Minimum password length is 8 characters.")
        .custom((value, { req }) => {
            if (value != req.body.rpassword) {
                throw new Error("Password confirmation is incorrect");
            } else {
                return value;
            }
        }),
    body("gender").custom((value) => {
        if (value > 3 || value < 1) {
            throw new Error("Invalid gender");
        } else {
            return value;
        }
    }),
];
