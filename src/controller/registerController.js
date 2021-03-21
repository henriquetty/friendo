const RegisterModel = require("../model/RegisterModel");

module.exports = {
  render: async function (req, res) {
    res.render("register");
  },
  register: async function (req, res) {
    let email, isEmailRegistered;

    email = req.body.email;

    //to fix
    const emailsRegistered = (callback) => {
      RegisterModel.verifyEmailAvailable(email, (results) => {
        return callback(results.length);
      });
    };

    testUserEmail((i) => {
      console.log(i);
    });

    // RegisterModel.register(req.body, (error, results, fields) => {
    //   console.log(results.affectedRows);
    // });

    res.json({
      ok: "ok",
    });
  },
};
