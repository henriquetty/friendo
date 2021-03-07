// const RegisterModel = require("../model/RegisterModel");

module.exports = {
  render: function (req, res) {
    res.render("register", { success: 1 });
  },
  register: function (req, res) {
    res.render("register");
  },
};
