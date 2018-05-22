const orm = require("../config/orm.js");

var burger = {

//Select data from table
	selectAll: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		})
	},
//Add a new value to table
	insertOne: function (name, cb) {
		orm.insertOne("burgers", name, function (res) {
			cb(res);
		});

	},
//Update a value 
	updateOne: function (name, cb) {
		orm.updateOne("burgers", name, function (res) {
			cb(res);
		})
	}
};
//Export database
module.exports = burger;