module.exports = {
    render: function (req, res) {
        let regsuccess = req.query.regsuccess;

        if (regsuccess == "1") {
            res.render("index", { regsuccess: true });
        } else if (regsuccess == "2") {
            res.render("index", { regsuccess: false });
        } else {
            res.render("index");
        }
    },
};
