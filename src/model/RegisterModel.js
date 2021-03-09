const connection = require("../database/dbConnection");

class RegisterModel {
  register(data, callback) {
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
        callback(error, null);
      }

      callback(null, results);
    });
  }
}

module.exports = new RegisterModel();
