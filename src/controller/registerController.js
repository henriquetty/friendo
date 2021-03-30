const { body, validationResult } = require("express-validator");
const RegisterModel = require("../model/RegisterModel");

module.exports = {
  render: function (req, res) {
    res.render("register");
  },
  validation: [body("email").isEmail().normalizeEmail(), body("password").isLength({ min: 8 })],
  register: async function (req, res) {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      req.flash(
        "validationErrors",
        "You must use a valid e-mail and your password has to be 8 chars or more."
      );
      return res.redirect("/register?success=false&code=invalidFields");
    }

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
