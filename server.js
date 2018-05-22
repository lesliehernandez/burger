//Establish dependencies
const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000;

const app = express();

//Serve static files from the 'public' directory
app.use(express.static("public"));

//Use body parser
app.use(bodyParser.urlencoded({ extended: false }));

//Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Require routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);