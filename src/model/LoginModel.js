const mysql = require("mysql");

const connectionConfig = require("../database/dbConnection");

class LoginModel {
    static verifyUserExists(data) {
        let connection = mysql.createConnection(connectionConfig);

        let sql = `SELECT email, password, userid FROM user_account WHERE email = '${data.email}' AND password = '${data.password}';`;

        return new Promise((resolve, reject) => {
            connection.query(sql, (error, results) => {
                if (error) return reject(error); //handled by catch

                if (results.length) {
                    resolve({ userID: results[0].userid });
                } else {
                    resolve(null);
                }
            });
            connection.end();
        });
    }
}

module.exports = LoginModel;
