// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Variables
var submitButton = $("#submitButton");
var devourButton = $("#devourButton");
var notEatenBurgers = $(".not-eaten-burgers");
var devouredBurgers = $(".devoured-burgers");
var form = $(".exampleFormControlTextarea1");
var formDiv = $(".form-group");
var textInput = $("#exampleFormControlTextarea1");


// * Inside your `burger` directory, create a folder named `models`.

//   * In `models`, make a `burger.js` file.

//     * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.

// selectAll();
// insertOne();
// updateOne();

$(document).ready(function () {

  // submitButton.on("click", function (event) {
  //   event.preventDefault();
  // })

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

});

// Export the database functions for the controller (catsController.js).
module.exports = burger;
