function showSound(animal) {
    var sound = animal.getAttribute("data-animal-sound");
    alert("The " + animal.innerHTML + " says " + sound + "!");
}
