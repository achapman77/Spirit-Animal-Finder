

var questionObj = [
  {
    q: "Your mind is always buzzing with unexplored ideas and plans.",
    id: 1
  },
  {
    q: "Generally speaking, you rely more on your experience than your imagination.",
    id: 2
  },
  {
    q: "You find it easy to stay relaxed and focused even when there is some pressure.",
    id: 3
  },
  {
    q: "You rarely do something just out of sheer curiosity.",
    id: 4
  },
  {
    q: "People can rarely upset you.",
    id: 5
  },
  {
    q: "It is often difficult for you to relate to other people’s feelings.",
    id: 6
  },
  {
    q: "In a discussion, truth should be more important than people’s sensitivities.",
    id: 7
  },
  {
    q: "You rarely get carried away by fantasies.",
    id: 8
  },
  {
    q: "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
    id: 9
  },
  {
    q: "You feel more energetic after spending time with a group of people.",
    id: 10
  }
]

//Render Questions===============================================

function renderQuestions() {
  $.each(questionObj, function (key, value) {
    var $newQuestion = $(".question-template").clone();
    $newQuestion.removeClass("question-template");
    $newQuestion.find(`label`).attr(`id`, `q-${this.id}`).text(this.q);
    $newQuestion.find(`input`).attr(`id`, `input-${this.id}`)
    $newQuestion.insertAfter($(`#template-start`));
    })
};
  
renderQuestions();
$(`.question-template`).hide();

//Slider==========================================================
//Credit for basic to https://seiyria.com/bootstrap-slider/#example-13
$(".custom-slider").slider({
  ticks: [1,2,3,4,5],
  ticks_labels: ['1', '2', '3', '4', '5'],
  ticks_snap_bounds: 1,
});

//Fully custom CSS transformation based on value
$(`.input-box`).on(`click`, function () {
  //Crux was to set data-value of parent to easily 'find' children
  var value = $(this).find(`input`).val();
  console.log(value);
  
  $(this).attr("data-value", value);
  if (value === "1") {
    $(this).find(`.slider-tick`).css("background", "#f5f5f5");
  } else if (value === "2") {
    $(this).find(`.slider-tick`).css("background", "#f5f5f5");
    $(this).find(`.slider-selection.tick-slider-selection`).css("background", "#4b4ef3");
    $(this).find(`.slider-tick.in-selection`).css("background", "#4b4ef3");
    $(this).find(`.slider-handle`).css("background", "#4b4ef3");
  } else if (value === "3") {
    $(this).find(`.slider-tick`).css("background", "#f5f5f5");
    $(this).find(`.slider-selection.tick-slider-selection`).css("background", "rgb(152, 248, 114)");
    $(this).find(`.slider-tick.in-selection`).css("background", "rgb(152, 248, 114)");
    $(this).find(`.slider-handle`).css("background", "rgb(152, 248, 114)");
  } else if (value === "4") {
    $(this).find(`.slider-tick`).css("background", "#f5f5f5");
    $(this).find(`.slider-selection.tick-slider-selection`).css("background", "rgb(248, 248, 114)");
    $(this).find(`.slider-tick.in-selection`).css("background", "rgb(248, 248, 114)");
    $(this).find(`.slider-handle`).css("background", "rgb(248, 248, 114)");
    // $(this).find(`.slider-tick`).css("background", "#f5f5f5");
  } else if (value === "5") {
    $(this).find(`.slider-selection.tick-slider-selection`).css("background", "rgb(248, 179, 114)");
    $(this).find(`.slider-tick.in-selection`).css("background", "rgb(248, 179, 114)");
    $(this).find(`.slider-handle`).css("background", "rgb(248, 179, 114)");
    // $(this).find(`.slider-tick`).css("background", "#f5f5f5");
  } else if (value === "6") {
    $(this).find(`.slider-selection.tick-slider-selection`).css("background", "rgb(236, 83, 83)");
    $(this).find(`.slider-tick.in-selection`).css("background", "rgb(236, 83, 83)");
    $(this).find(`.slider-handle`).css("background", "rgb(236, 83, 83)");
  };
})


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

      $(".custom-slider").each(function() {

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
          $("#input-1").val(),
          $("#input-2").val(),
          $("#input-3").val(),
          $("#input-4").val(),
          $("#input-5").val(),
          $("#input-6").val(),
          $("#input-7").val(),
          $("#input-8").val(),
          $("#input-9").val(),
          $("#input-10").val()
        ]
      };
      console.log(userData);

      // AJAX post the data to the animal API.
      $.post("/api/animals", userData)
          .then(function(data) {
            
            var matchName = data.name.toUpperCase();

          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(` ${matchName}!`).css({
              'color': 'red',
              'font-size': '1.5em',
            });
          $("#match-img").attr("src", data.photo);

          // Show the modal with the best match
            $("#results-modal").modal("toggle");

            
          })
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });

$(".modal").on("click", function () {
  console.log("WTF?")
  $("#name").text("");
  $("#photo").text("");
  $("#input-1").attr('value','1');
  $("#input-2").attr('value','1');
  $("#input-3").attr('value','1');
  $("#input-4").attr('value','1');
  $("#input-5").attr('value','1');
  $("#input-6").attr('value','1');
  $("#input-7").attr('value','1');
  $("#input-8").attr('value','1');
  $("#input-9").attr('value','1');
  $("#input-10").attr('value','1');
})