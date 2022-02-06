const express = require("express");
const apiRoutes = require("./routes/api.js");
const htmlRoutes = require("./routes/html.js");

// Definte app and server port
let app = express();
let PORT = process.env.PORT || 3001;

// Setup for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Open port to listen for requests
app.listen(PORT, function() {
    console.log("Server is listening on http://localhost:" + PORT);
});