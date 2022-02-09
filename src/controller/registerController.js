const UserModel = require("../model/UserModel");

const render = (req, res) => {
    res.render("register");
}

const register = async (req, res) => {
    const { firstName, lastName, email, password, gender, birthdate } = req.body;
    
    const userExists = await UserModel.findOne({
        where: {
            email,
        }
    });
    
    if (userExists) {
        return res.redirect("/?error=emailTaken");
    }

    await UserModel.create({
        firstName, lastName, email, password, gender
    });

    return res.redirect("login");
    
}

module.exports = {
    render, register
}
