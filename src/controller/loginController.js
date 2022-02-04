const UserModel = require("../model/UserModel");

const render = (req, res) => {
    res.render("login");
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const result = await UserModel.findOne({
        where: {
            email,
        }
    });

    console.log(result);
}

module.exports = {
    render, login
}
