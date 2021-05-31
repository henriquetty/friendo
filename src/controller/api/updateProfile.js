const ProfileHandler = require("../../model/api/ProfileHandler");

module.exports = {
    update: function (req, res) {
        ProfileHandler.updateProfile(req.body.userID);
        res.status(200).json({ mbti: req.body.mbti, userID: req.session.userID });
    },
};
