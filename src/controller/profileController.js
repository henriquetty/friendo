const UserModel = require("../model/UserModel");

const render = async (req, res) => {
    const profileID = req.params.id;

    const user = await UserModel.findOne({
        where: {
            id: profileID,
        }
    });

    if (!user) {
        return res.redirect("/?error=notFound");
    }
    
    let isProfileOwner = req.session.userID == req.params.id ? true : false;
    
    return res.render("profile", {
        isProfileOwner,
        firstName: user.firstName,
        email: user.email,
        gender: user.gender,
    });
}

module.exports = {
    render
}
    