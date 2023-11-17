window.addEventListener("resize", function() {
    var width = window.innerWidth;
    var textElement = document.getElementById("My-name");

    // Change the text for screens 600px or less
    if (width <= 600) {
        textElement.textContent = "S. Aidar"
    } else {
        textElement.textContent = "Sharipov Aidar" // Change the text back for screens larger than 600px
    }
});