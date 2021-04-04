const LoginModel = require("../model/LoginModel");

module.exports = {
    render: function (req, res) {
        res.render("login");
    },
    login: async function (req, res) {
        try {
            let userExists = await LoginModel.verifyUserExists(req.body);

            if (!userExists) {
                req.flash("invalidlogin", "User does not exist or wrong password/email.");
                return res.redirect("/login?success=false&code=invalidData");
            }

            //set cookies and session
            res.redirect(`/profile?userid=${userExists[1].userid}`);
        } catch (error) {
            console.log(error);
            res.redirect("/login?success=false&code=genericerror");
        }
    },
};
