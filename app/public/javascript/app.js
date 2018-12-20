
//https://seiyria.com/bootstrap-slider/#example-13
$(".custom-slider").slider({
  ticks: [1,2,3,4,5],
  ticks_labels: ['1', '2', '3', '4', '5'],
  ticks_snap_bounds: 1,
});

var questionArr = [
  "Your mind is always buzzing with unexplored ideas and plans.",
  "Generally speaking, you rely more on your experience than your imagination.",
  "You find it easy to stay relaxed and focused even when there is some pressure.",
  "You rarely do something just out of sheer curiosity.",
  "People can rarely upset you.",
  "It is often difficult for you to relate to other people’s feelings.",
  "In a discussion, truth should be more important than people’s sensitivities.",
  "You rarely get carried away by fantasies.",
  "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
  "You feel more energetic after spending time with a group of people.",
  
]

// Chosen CSS
var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
      allow_single_deselect: true
    },
    ".chosen-select-no-single": {
      disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
      no_results_text: "Oops, nothing found!"
    },
    ".chosen-select-width": {
      width: "95%"
    }
  };

  for (var selector in config) {
    $(selector).chosen(config[selector]);
  }

  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
      var isValid = true;
      $(".form-control").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".chosen-select").each(function() {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
      var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };

      // AJAX post the data to the friends API.
      $.post("/api/animals", userData, function(data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });

  console.log("hello")