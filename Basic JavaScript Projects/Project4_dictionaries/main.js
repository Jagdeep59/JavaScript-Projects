function my_dictionaries(){
    var Animal = {
        Species: "Dog",
        Color: "black",
        Breed: "labrador",
        Age: 5,
        Age: 10,
        Sound: "bark!"
    };
    delete Animal.Sound // this remove the Sound and if we acces Sound after delet it give undefind
    document.getElementById("Dictionaries").innerHTML = Animal.Sound;
}
