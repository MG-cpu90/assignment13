
// Variables
const submitButton = $("#submitButton");
const devourButton = $(".devourButton");
const notEatenBurgers = $(".not-eaten-burgers");
const devouredBurgers = $(".devoured-burgers");
const devourForm = $(".devourForm");
const form = $(".exampleFormControlTextarea1");
const formDiv = $(".form-group");
const textInput = $("#exampleFormControlTextarea1");

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  devourButton.on("click", function(event) {
    event.preventDefault();
    console.log($(this));
    let id = $(this).attr("id");
    let devouredBurger = $(this).data("devoured");
    console.log("This is", id);

    let newDevouredBurger = {
      devoured: devouredBurger
    };

    // Send the PUT request.
    $.ajax({
      url: "/api/burgers/" + id,
      method: "PUT",
      data: newDevouredBurger
    }).then(
      function() {
        console.log("changed devoured to", devouredBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Getting references to our form and input
  submitButton.on("click", function (event) {
    event.preventDefault();

    // Make a userBurger object
    let userBurger = {
      burger_name: textInput.val().trim(),
    };
    // Wont submit the thank if we are missing a body or author
    if (!userBurger.burger_name ) {
      return;
    }

        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: userBurger
        }).then(
          function() {
            console.log("Added new burger!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

  })

    
