const router = require("express").Router();
const path = require("path");

// Get notes HTML
router.get("/notes", (res) => {
    // Send notes.html as response
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Get index.html
router.get("*", (req, res) => {
    // Send index.html as response
    res.sendFile(path.join(__dirnam, "../public/index.html"));
});

module.exports = router;