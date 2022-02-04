const UserModel = require("../model/UserModel");

const render = (req, res) => {
    res.render("register");
}

const register = async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, password, gender, birthdate } = req.body;
    const user = await UserModel.create({
        firstName, lastName, email, password, gender
    });
}

module.exports = {
    render, register
}
