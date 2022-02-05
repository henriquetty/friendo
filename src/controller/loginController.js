const UserModel = require("../model/UserModel");

const render = (req, res) => {
    res.render("login");
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const userExists = await UserModel.findOne({
        where: {
            email,
        }
    });

    if (!userExists) {
        return res.redirect("/");
    }

    req.session.userID = userExists.id;

    return res.redirect(`/profile?id=${userExists.id}`);
}

const logout = (req, res) => {
    req.session.destroy();
    
    return res.redirect("/");
}

module.exports = {
    render, login, logout
}
