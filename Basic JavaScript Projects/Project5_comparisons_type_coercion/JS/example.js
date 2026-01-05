function my_function1(){ // display NaN
    document.getElementById("Test1").innerHTML = 0/0;
}

function my_function2(){ // display true
document.getElementById("Test2").innerHTML = isNaN("this is a string");
}

function my_function3(){ // display flase
    document.getElementById("Test3").innerHTML = isNaN(108);
}

function showInfinity() {// display infinity
  document.getElementById("Infinity").innerHTML = 1E309;
}

function showNegativeInfinity() { // display -infinity
  document.getElementById("NegInfinity").innerHTML = -1E309;
}

document.writeln(10 > 2); //ture
document.writeln(10 > 20); //false

console.log(8+8); //16
console.log(7>9); //false

//using == sign

document.writeln(10==10);
document.writeln(10==19);

X= 10;
Y= 10;
document.writeln(X === Y)// return true

A= "10";
B= 10;
document.writeln(A === B) // return false

name1= "jagdeep";
name2= "jagdeep";
document.writeln(name1 === name2) // return ture

name1= "jagdeep";
name2= "seema";
document.writeln(name1 === name2) // return ture

// AND (&&) operator
document.writeln(5 > 2 && 10 > 4); // true

// One condition is false, so this returns false
document.writeln(5 > 10 && 10 > 4); // false


// OR (||) operator
document.writeln(5 > 10 || 10 > 4); // true

// Both conditions are false, so this returns false
document.writeln(5 > 10 || 4 > 10); // false


// NOT operator example
function notFunction1() {
  document.getElementById("Not1").innerHTML = !(5 > 10); // true
} // return ture

// NOT operator example
function notFunction2() {
  document.getElementById("Not2").innerHTML = !(20 > 10); // true
} // return false