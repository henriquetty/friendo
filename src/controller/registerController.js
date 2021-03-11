const RegisterModel = require("../model/RegisterModel");

module.exports = {
  render: function (req, res) {
    res.render("register", { success: 1 });
  },
  register: function (req, res) {
    RegisterModel.register(req.body, (error, response) => {
      if (error) {
        return res.redirect("/?regsuccess=2");
      }

      res.redirect("/?regsuccess=1");
    });
  },
};
