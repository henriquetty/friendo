const connection = require("../database/dbConnection");

module.exports = {
  register: function (data, callback) {
    const { firstName, lastName, email, password, birthdate, gender } = data;

    let sql = `INSERT INTO user_account (first_name, last_name, email, password, age, gender)
    VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '18', '${gender}')`;

    connection.query(sql, (error, results, fields) => {
      if (error) {
        return callback(error, null);
      }

      callback(null, results);
    });
  },
};
