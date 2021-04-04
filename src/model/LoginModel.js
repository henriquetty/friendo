const mysql = require("mysql");
const connectionConfig = require("../database/dbConnection");

class LoginModel {
    static verifyUserExists(data) {
        let connection = mysql.createConnection(connectionConfig);

        let sql = `SELECT email, password, userid FROM user_account WHERE email = '${data.email}' AND password = '${data.password}';`;

        return new Promise((resolve, reject) => {
            connection.query(sql, (error, results) => {
                if (error) return reject(error);

                if (results.length === 0) {
                    resolve(null);
                } else if (
                    results[0].email === data.email &&
                    results[0].password === data.password
                ) {
                    resolve([true, { userid: results[0].userid }]);
                }
            });
            connection.end();
        });
    }
}

module.exports = LoginModel;
