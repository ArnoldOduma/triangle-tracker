// Declaring the variables
var valueOne, valueTwo, valueThree, output, sides;


function findTriangle() {

  // variables to hold the values from the form
  valueOne = parseInt(document.getElementById("numberOne").value);
  valueTwo = parseInt(document.getElementById("numberTwo").value);
  valueThree = parseInt(document.getElementById("numberThree").value);
  output = document.getElementById("output");

  // Created an array to hold the entered  values.
  sides = [valueOne, valueTwo, valueThree]

  // alert("You entered " + sides);
  // alert(Math.max(parseInt(sides)));


  // if else statements to determine the triangle type
  if (sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0]) {
    output.innerHTML = "The values you entered cannot form a triangle";
    output.className = 'red';

  } 
  else if (sides[0] === sides[1] && sides[2] === sides[1]) {
    output.innerHTML = "Equilateral triangle";
    output.className = '';
  } 
  else if (sides[0] == sides[1] || sides[1] == sides[2] || sides[0] == sides[2]) {
    output.innerHTML = "Isosceles triangle";
  } 
  else if (valueOne !== valueTwo !== valueThree) {
    output.innerHTML = "Scalene triangle";
  } 
  else {
    alert("Make sure you enter numbers");

  } 

  }