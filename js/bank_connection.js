var mysql = require ("mysql");

function bankConnection () {

  this.connection = mysql.createConnection ({
    host: ,
    user: ,
    password: ,
    database: ,
  });

  this.connected = function () {
    this.connection.connect ();
    return this.connection;
  };

}
