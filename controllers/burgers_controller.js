//Establish dependencies
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

//Create routes
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var burgObj = {
			burgers: data
		};
		res.render("index", burgObj);		
	});	
});

router.post("/api/burgers", function(req, res) {
	burger.insertOne(req.body.name, function(result) {
		res.json({ id: result.insertId });
	});
});


router.put("/api/burgers/:id", function(req, res) {
	var id = req.params.id;
	var condition = "id = " + id;
	var setValue = "devoured = 1";
	burger.update(setValue, condition, function(result) {
		 if (result.changedRows == 0) {
	      return res.status(404).end();
	    } else {
	      res.status(200).end();
	    }
	});
});
//Export routes
module.exports = router;