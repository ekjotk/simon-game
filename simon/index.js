

    var buttonColours = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];
    var level = 0;

    // choose random button, animate random button, plays sound of it an store in gamePattern array
    function nextSequence() {
      var randomNumber = ~~(Math.random() * 4);
      var randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);
      $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
      var buttonSound = new Audio("sounds/" + randomChosenColour + ".mp3");
      buttonSound.play();
      var a = ++level;
      $("h1").html("Level " + level);
      $("#1").html(level);

    }



    // Starting the game

    $(document).one("keydown", function() {
    nextSequence();
    })

    // Events for clicking the button

    $(".btn").click(function(event) {

      var userChosenColour = this.id;
      userChosenColour = this.id;
      playSound(this.id);
      console.log(userChosenColour);
      animatePress(userChosenColour);

    userClickedPattern.push(userChosenColour);

    if (gamePattern.length === userClickedPattern.length){
    checkAnswer(level);
    userClickedPattern = [];
    }
    else{}

    })

    // Check answer, compare arrays function

    function checkAnswer(currentLevel) {
      if (gamePattern.join() === userClickedPattern.join()) {
    setTimeout(function(){
        nextSequence();
    }, 1000)
    }
      else {
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("#body").addClass("ody");
        setTimeout(function(){
          $("body").removeClass("ody");
        }, 2000)
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
      }

    }


    // function that plays differenr sounds for different buttons

    function playSound(name) {
      switch (name) {
        case "blue":
          var blue = new Audio("sounds/blue.mp3")
          blue.play();
          break;
        case "green":
          var green = new Audio("sounds/green.mp3")
          green.play();
          break;
        case "red":
          var red = new Audio("sounds/red.mp3")
          red.play();
          break;
        case "yellow":
          var yellow = new Audio("sounds/yellow.mp3")
          yellow.play();
          break;
        default:


      }
    }

    // Function that animates clicked button

    function animatePress(currentColour) {
      $("#" + currentColour).addClass("pressed");
      setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
    }

    // Resets some vars and arrays to start the new game

    function startOver(){
      gamePattern = [];
      level = 0;
      $(document).one("keydown", function(event) {

          nextSequence();

      })
    }
