function makeSentence() {
    var part1 = "JavaScript ";
    var part2 = "string methods ";
    var part3 = "are very useful.";

    var fullSentence = part1.concat(part2, part3);

    document.getElementById("Concatenate").innerHTML = fullSentence;
}



function sliceText() {
    var sentence = "Learning JavaScript string methods is important.";
    var section = sentence.slice(9, 19);

    document.getElementById("Slice").innerHTML = section;
}



function makeUppercase() {
    var text = "javascript string methods";
    var upperText = text.toUpperCase();

    document.getElementById("Uppercase").innerHTML = upperText;
}


function findWord() {
    var sentence = "Learning JavaScript is fun and powerful.";
    var position = sentence.search("JavaScript");

    document.getElementById("Search").innerHTML =
        "The word 'JavaScript' starts at position: " + position;
}


function string_Method() {
  var X = 182; 
  document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
  var X = 12938.3012987376112;
  document.getElementById("Precision").innerHTML = X.toPrecision(10);
}


// toFixed example
function fixed_Method() {
  var num = 12.34567;
  document.getElementById("fixed").innerHTML = num.toFixed(2);
}

// valueOf example
function value_Method() {
  var num = new Number(123);
  document.getElementById("value").innerHTML = num.valueOf();
}

