const { body, validationResult } = require("express-validator");
const RegisterModel = require("../model/RegisterModel");

module.exports = {
    render: (req, res) => {
        res.render("register");
    },
    register: async (req, res) => {
        const validationErrors = validationResult(req);

        //validations server side
        if (!validationErrors.isEmpty()) {
            const objectOfErrors = validationErrors.errors;

            if (objectOfErrors.length > 1) {
                const listOfErrors = objectOfErrors.map((value) => value.param);

                let listOfErrorsMessage = "";

                for (let i = 0; i < listOfErrors.length; i++) {
                    if (i < listOfErrors.length - 1) {
                        listOfErrorsMessage += `${listOfErrors[i]}, `;
                    } else {
                        listOfErrorsMessage += `${listOfErrors[i]}.`;
                    }
                }

                req.flash(
                    "validationErrors",
                    `Please, verify the following fields: ${listOfErrorsMessage}`
                );

                return res.redirect("/register?success=false&code=invalidFields");
            } else {
                req.flash("validationErrors", `${objectOfErrors[0].msg}`);
                return res.redirect("/register?success=false&code=invalidFields");
            }
        }

        //try to register user
        try {
            let isEmailRegistered = await RegisterModel.verifyEmailAvailable(req.body.email);

            if (isEmailRegistered) {
                req.flash("emailTaken", "This email is not available.");
                return res.redirect("/register?success=false&code=emailtaken");
            }

            //in case isEmailRegistered is false
            RegisterModel.register(req.body)
                .then((data) => {
                    req.flash("regSuccess", "You may sign in now :)");
                    res.redirect("/login");
                })
                .catch((err) => {
                    console.log(err);
                    req.flash("genericError", "Administrators were warned of this error.");
                    res.redirect("/register?success=false");
                });
        } catch (err) {
            console.log(err);
            req.flash("genericError", "Administrators were warned of this error.");
            res.redirect("/register?success=false");
        }
    },
};
