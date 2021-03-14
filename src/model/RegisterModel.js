const mysql = require("mysql");
const connectionConfig = require("../database/dbConnection");

class RegisterModel {
  static verifyEmailExists(email, callback) {
    let connection = mysql.createConnection(connectionConfig);

    let sql = `SELECT email FROM user_account WHERE email = '${email}';`;

    connection.query(sql, (error, results, fields) => {
      if (error) {
        callback(error, null, null);
      } else {
        callback(null, results, fields);
      }
    });

    connection.end();
  }

  static register(data, callback) {
    let connection = mysql.createConnection(connectionConfig);

    const {
      fname,
      lname,
      email,
      password,
      rpassword,
      birthdate,
      gender,
    } = data;

    let sql = `INSERT INTO user_account (first_name, last_name, email, password, age, gender)
    VALUES ('${fname}', '${lname}', '${email}', '${password}', '${birthdate}', '${gender}')`;

    connection.query(sql, (error, results, fields) => {
      if (error) {
        return callback(error, null, null);
      }

      callback(null, results, fields);
    });

    connection.end();
  }
}

module.exports = RegisterModel;
