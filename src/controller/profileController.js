const dbConnection = require("../database/dbConnection");
const mysql = require("mysql");

module.exports = {
    render: function (req, res) {
        const sql = `SELECT * FROM user_account WHERE userid = '${req.query.userid}'`;
        const connection = mysql.createConnection(dbConnection);

        const queryResults = new Promise((resolve, reject) => {
            connection.query(sql, (error, results) => {
                if (error) return reject(error);

                resolve(results[0]);
            });
        });

        queryResults.then((data) => {
            res.render("profile", {
                userid: data.userid,
                firstName: data.first_name,
                email: data.email,
                age: data.age,
                gender: data.gender == "1" ? "male" : "female",
            });
        });
    },
};
