const UserModel = require("../model/UserModel");

const render = (req, res) => {
    res.render("login");
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
        where: { email }
    });

    if (user && user.email == email && user.password == password) {
        req.session.userID = user.id;
        return res.redirect(`/profile/${user.id}`);
    }

    return res.redirect("/?error=notFound");
}

const logout = (req, res) => {
    req.session.destroy();
    
    return res.redirect("/");
}

module.exports = {
    render, login, logout
}
