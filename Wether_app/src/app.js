const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

//use middleware
// my application use static page
// public static path
const static_path = path.join(__dirname, "../public");

app.set("views", "../src/views"); // specify the views directory
app.set("view engine", "hbs");

app.use(express.static(static_path));

// home api route
app.get("/", (req, res) => {
  res.render("index");
});

//about page route
app.get("/about", (req, res) => {
  res.render("about");
});

//wether page route
app.get("/wether", (req, res) => {
  res.render("wether");
});

// 404 page when user type wrong path
app.get("*", (req, res) => {
  res.send("404 ERROR 😞");
});

app.listen(port, () => {
  console.log(`listenig on port ${port}`);
});
