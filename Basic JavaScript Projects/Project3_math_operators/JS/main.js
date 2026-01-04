function addNumbers() {
  var num1 = 8;
  var num2 = 12;
  var sum = num1 + num2;

  document.getElementById("Math").innerHTML =
    "The sum is: " + sum; // this performe addition 
}



function subtractNumbers() {
  var num1 = 20;
  var num2 = 8;
  var difference = num1 - num2;

  document.getElementById("Math2").innerHTML =
    "The difference is: " + difference; // this perform substracttion
}


function multiplyNumbers() {
  var num1 = 6;
  var num2 = 5;
  var product = num1 * num2;

  document.getElementById("Math3").innerHTML =
    "Multiplication result: " + product; // Multiplication function
}

function divideNumbers() {
  var num1 = 20;
  var num2 = 4;
  var quotient = num1 / num2;

  document.getElementById("Math4").innerHTML =
    "Division result: " + quotient;// Division function
}

function moreMath() {
  var simpleMath = (1 + 2) * 10 / 2 - 5;
  document.getElementById("Math5").innerHTML =
    "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simpleMath; //multiple mathematical operations
}


function modulusOperator() {
  var simpleMath = 25 % 6; 
  document.getElementById("Math6").innerHTML =
    "When you divide 25 by 6 you have a remainder of: " + simpleMath;//modulus operator
}


function negationOperator() {
  var x = 10;
  document.getElementById("Math7").innerHTML = -x;
} //negation Operator


// inc & dec 
var x = 5;
x++;
document.writeln(x);

var v = 5.25;
v--;
document.writeln(v);

// random 

window.alert(Math.random())

window.alert(Math.random() * 100)


function mathObjectExample() {
  var number = 16;
  var result = Math.sqrt(number); // Math.sqrt() returns the square root

  document.getElementById("Math8").innerHTML =
    "The square root of " + number + " is " + result;
} // this is math object 



