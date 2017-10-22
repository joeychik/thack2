var mysql = require ("mysql");

function bankConnection () {

  this.connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: null,
    database: "loginData",
  });

  this.connected = function () {
    this.connection.connect ();
    return this.connection;
  };

}
