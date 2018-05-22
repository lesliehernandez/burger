//Establish dependencies
const connection = require('../config/connection.js');

var orm = {
	//Selects all items in table
	selectAll: function(cb) {
		var queryString = "SELECT * FROM " + burgers;
		connection.query(queryString, function(err, result) {
		  if (err) throw err;
		  cb(result);
		});
	  },
	
	  insertOne: function(name, cb) {
		var queryString = "INSERT INTO ?? SET ?";
		connection.query(queryString, function(err, result) {		  if (err) {
			throw err;
		  }
		  cb(res);
		});
	  },

	//Updates item in table
	updateOne: function(name, cb){
		var queryString = "UPDATE ?? SET ? WHERE ?";

		connection.query(queryString, function(err, result) {
		    if (err) throw err;
		    cb(result);
		});
	},
};
//Export connection
module.exports = orm;