function userSDR () {

  var connection = new bankConnection ();

  this.save = function (user, callback) {

    var c = connection.connected () ;

    c.query ("INSERT INTO user SET?"), [user], function (err, result) {
      if (err) {
        console.log ("[ERROR] " + err.message);
        callback (false);
      } else
        callback (true);
      c.end ();
    });
  }

  this.delete = function (user, callback) {

    var c = connection.connected () ;

    c.query ("INSERT INTO user SET?"), [user], function (err, result) {
      if (err) {
        console.log ("[ERROR] " + err.message);
        callback (false);
      } else
        callback (true);
      c.end ();
    });
  }

  this.refresh = function (user, callback) {

    var c = connection.connected () ;

    c.query ("INSERT INTO user SET?"), [user], function (err, result) {
      if (err) {
        console.log ("[ERROR] " + err.message);
        callback (false);
      } else
        callback (true);
      c.end ();
    });
  }

}
