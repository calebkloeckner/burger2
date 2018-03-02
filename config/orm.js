var connection = require("../config/connection.js");

var orm = {
  all: function(tableInput, cb){
    connection.query("SELECT * FROM " +tableInput+";", function(error, result) {
      if(error) throw error;
      cb(result)
    })
  },

  update: function(tableInput, condition, cb, devoured) {
    connection.query("UPDATE "+tableInput+" SET devoured=true WHERE id="+condition+";", function(error, result){
      if(error)throw error;
      cb(result);
    })
  },

  create: function(tableInput, val, cb) {
    connection.query("INSERT INTO "+tableInput+" (burger_name)VALUES ('"+val+"');", function(error, result){
      if(error) throw error;
      cb(result);
    })
  }
}


module.exports = orm;
