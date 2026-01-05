function outerFunction() {
    document.getElementById("Nested_Function").innerHTML = innerFunction();

    // Nested function
    function innerFunction() {
        let start = 5;
        function addOne() {
            start += 1;
        }
        addOne(); 
        return start; 
    }
}
