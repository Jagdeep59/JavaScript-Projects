// global var
var globalNumber = 10;
function globalFunction() {
    document.writeln("Global Number + 20 = " + (globalNumber + 20) + "<br>");
}

// func of local var
function localFunction() {
    var localNumber = 5;
    document.write("Local Number + 10 = " + (localNumber + 10) + "<br>");
}

// func with international error
function errorFunction() {
    console.log("Trying to use a local variable outside its scope...");
    console.log(localNumber + 10); 
}


// method staatement= Date().getHours() with if statement
function get_Time() {
    var hour = new Date().getHours();

    if (hour < 18) {
        document.getElementById("Greeting").innerHTML =
            "How are you today?";
    } else {
        document.getElementById("Greeting").innerHTML =
            "Good evening!";
    }
}

//  if statement
function check_Age() {
    var age = 20;

    if (age >= 18) {
        document.getElementById("AgeCheck").innerHTML =
            "You are old enough to vote.";
    }
}


// else statement 
function ageCheck() {
    var age = document.getElementById("userAge").value;
    var message;

    if (age >= 18) {
        message = "You are eligible to vote.";
    } else {
        message = "You are not eligible to vote yet.";
    }

    document.getElementById("ageResult").innerHTML = message;
}

