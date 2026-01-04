function showResult() {
  var num1 = 4;
  var num2 = 6;
  var result = num1 + num2;

  document.getElementById("answer").innerHTML =
    "Result: " + result; // this is the code for button which perform addition 
}


function myFunction() { // this is the function for conatenate string and display the sentence on string after clicking (click here!)
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; 
}
