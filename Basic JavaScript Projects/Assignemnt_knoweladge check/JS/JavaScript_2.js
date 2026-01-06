// canvas 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 200, 100);

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText("Canvas Graphic", 80, 110);


// gadient color challenge
var gradient = ctx.createLinearGradient(0, 0, 500, 0);

gradient.addColorStop(0, "red");
gradient.addColorStop(1, "yellow");

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 500, 250);



function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
