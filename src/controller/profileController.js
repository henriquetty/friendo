const UserModel = require("../model/UserModel");

const render = async (req, res) => {
    const profileID = req.query.id;

    const user = await UserModel.findOne({
        where: {
            id: profileID,
        }
    });

    if (!user) {
        return res.redirect("/");
    }
    
    return res.render("profile", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
    });
}

module.exports = {
    render
}
