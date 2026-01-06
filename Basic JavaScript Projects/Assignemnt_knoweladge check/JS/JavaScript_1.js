function Animal_Function() {
    let animalOutput;
    let animal = document.getElementById("Animal_Input").value;
    let message = " is an amazing animal!";

    switch (animal) {
        case "Cat":
            animalOutput = "Cat" + message;
            break;
        case "Dog":
            animalOutput = "Dog" + message;
            break;
        case "Elephant":
            animalOutput = "Elephant" + message;
            break;
        case "Lion":
            animalOutput = "Lion" + message;
            break;
        case "Tiger":
            animalOutput = "Tiger" + message;
            break;
        default:
            animalOutput = "Please enter an animal exactly as listed above.";
    }

    document.getElementById("Output").innerHTML = animalOutput;
}


function HelloWorld_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

