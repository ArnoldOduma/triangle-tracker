// Declaring the variables
var valueOne, valueTwo, valueThree, output, sides;


function findTriangle() {

  valueOne = parseInt(document.getElementById("numberOne").value);
  valueTwo = parseInt(document.getElementById("numberTwo").value);
  valueThree = parseInt(document.getElementById("numberThree").value);
  output = document.getElementById("output");

  // Created an array to hold the entered  values.
  sides = [valueOne, valueTwo, valueThree]

  // alert("You entered " + sides);
  // alert(Math.max(parseInt(sides)));

  if (sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0]) {
    alert("The values you entered cannot form a triangle");
  } 
  else if (sides[0] === sides[1] && sides[2] === sides[1]) {
    // alert("This is an equilateral triangle");
    output.innerHTML = "Equilateral triangle";
  } 
  else if (sides[0] == sides[1] || sides[1] == sides[2] || sides[0] == sides[2]) {
    alert("Isosceles");
  } 
  else if (valueOne !== valueTwo !== valueThree) {
    alert("Scalene");
  } 
  else {
    alert("Make sure you enter numbers");

  } 

  }