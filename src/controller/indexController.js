const render = (req, res) => {

    //checking if sesson userID exists and rendering index page with the userdata
    if (req.session.userID) {
        return res.render("index", {
            userID: req.session.userID,
            isLoggedIn: true,
        });

    }

    res.render("index", {
        userID: null,
        isLoggedIn: false
    });
    
}

module.exports = {
    render
}