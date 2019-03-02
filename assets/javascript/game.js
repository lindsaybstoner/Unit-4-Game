
//global variables
//create the target number to have users guess 
var targetNumber = Math.floor(Math.random() * 101) + 19;

//print target number that the user should guess
$("#number-to-guess").text(targetNumber);

var counter = 0;

//create a for loop to get through all 4 images and put differetn attributes 
for (var i = 1; i < 5; i++) {

  var imageCrystal = $("<img>");
  var numberOption = Math.floor(Math.random() * 12) + 1;
  imageCrystal.attr("data-crystalvalue", numberOption);
  console.log(numberOption);
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "assets/images/" + i + ".png");

  console.log("hello");

  imageCrystal.attr("data-crystalvalue", numberOption[i]);
  $("#crystals").append(imageCrystal);

}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }





});