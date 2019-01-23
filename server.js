// Require in dependencies.
const exphbs = require("express-handlebars");
const express = require("express");

// Set up port
const PORT = process.env.PORT || 3000;

// Create app
const app = express();

// Serve content from the "public" folder
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the handlebars view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes from the controller
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Tell the port to listen and console.log to verify
app.listen(PORT, function() {
  console.log(`Listening at localhost:${PORT}`);
});
