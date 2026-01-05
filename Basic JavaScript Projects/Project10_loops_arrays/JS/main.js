function Call_Loop() {
  let text = "";
  let i = 0;
  while (i < 10) {
    text += "The number is " + i + "<br>";
    i++;
  }
  document.getElementById("Loop").innerHTML = text;
}

function Call_For_Loop() {
  let text = "";

  for (let i = 0; i < 10; i++) {
    text += "The for loop number is " + i + "<br>";
  }

  document.getElementById("ForLoop").innerHTML = text;
}

function cat_pics() {
  var Cat_Picture = [];
  Cat_Picture[0] = "sleeping";
  Cat_Picture[1] = "playing";
  Cat_Picture[2] = "eating";
  Cat_Picture[3] = "purring";

  document.getElementById("Cat").innerHTML =
    "In this picture, the cat is " + Cat_Picture[2] + ".";
}

const Musical_Instrument = {
  type: "guitar",
  brand: "Fender",
  color: "black",
  price: 900,
};

function constant_function() {
  Musical_Instrument.color = "blue";
  Musical_Instrument.year = 2026;
  document.getElementById("Constant").innerHTML =
    "The cost of the " +
    Musical_Instrument.type +
    " was $" +
    Musical_Instrument.price +
    ". Its color is now " +
    Musical_Instrument.color +
    " and it was made in " +
    Musical_Instrument.year +
    ".";
}

function runLetExample() {
  var X = 82;
  document.getElementById("LetOutput").innerHTML = X + "<br>";

  {
    let X = 33;
    document.getElementById("LetOutput").innerHTML += X + "<br>";
  }

  document.getElementById("LetOutput").innerHTML += X + "<br>";
}


let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
    }
};

function showCar() {
    document.getElementById("Car_Object").innerHTML = car.description();
}
