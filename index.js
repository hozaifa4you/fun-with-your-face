const express = require("express");
const path = require("path");
const morgan = require("morgan");

// config
const app = express();

// set
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(8080, () => console.log("Server is listening on: 8080"));
