const mysql = require("mysql");
const connectionConfig = require("../database/dbConnection");

class RegisterModel {
    static verifyEmailAvailable(email) {
        let connection = mysql.createConnection(connectionConfig);

        let sql = `SELECT email FROM user_account WHERE email = '${email}';`;

        return new Promise((resolve, reject) => {
            connection.query(sql, (error, results) => {
                if (error) return reject(error);

                if (results.length === 0) {
                    //email is not registered yet
                    resolve(false);
                } else {
                    //email was found in the DB.
                    resolve(true);
                }
            });
            connection.end();
        });
    }

    static register(data) {
        let connection = mysql.createConnection(connectionConfig);

        const { fname, lname, email, password, birthdate, gender } = data;

        let sql = `INSERT INTO user_account (first_name, last_name, email, password, age, gender)
    VALUES ('${fname}', '${lname}', '${email}', '${password}', '${birthdate}', '${gender}')`;

        return new Promise((resolve, reject) => {
            connection.query(sql, (error, results) => {
                if (error) return reject(error);

                resolve(results);
            });
            connection.end();
        });
    }
}

module.exports = RegisterModel;
