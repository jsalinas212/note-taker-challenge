const router = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json");

// Get request to notes route
router.get("/notes", (req, res) => {
    // Read from db.json and pull data as JSON
    db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    res.json(db);
});

// Post request to notes route
router.post("/notes", (req, res) => {
    // Note object
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000)
    }

    // Push note to DB and update db.json file
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
});

module.exports = router;