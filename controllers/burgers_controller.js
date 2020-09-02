// Variables
const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// Get all burgers (Get)
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
                // devouredBurgers: data
        };
        console.log("object?", hbsObject);
        res.render("index", hbsObject);
    });
});

// Add a burger (Post)
router.post("/api/burgers", function(req, res) {
    burger.create(
        [
            "burger_name", "devoured"
        ], [
            req.body.burger_name, req.body.devoured
        ],
        function(result) {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        });
});

// Add
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    burger.update({
        devoured: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;