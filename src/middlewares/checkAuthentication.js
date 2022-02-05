const authCheck = (req, res, next) => {
    if (req.session.userID) {
        return next();
    }

    req.flash("unauthenticated", "Sign in to continue");
    return res.redirect("/login?success=false");
};

module.exports = authCheck;
