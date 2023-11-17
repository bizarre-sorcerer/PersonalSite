var width = window.innerWidth;
var textElement = document.getElementById("My-name");

// По дефолту в начале проверяет размер экрана, в случае если изначально на телефону открывают
if (width <= 600) {
    textElement.textContent = "S. Aidar"
} else {
    textElement.textContent = "Sharipov Aidar" // Change the text back for screens larger than 600px
}

// Это в случае если в ручную меняют размер экрана
window.addEventListener("resize", function() {
    // Change the text for screens 600px or less
    if (width <= 600) {
        textElement.textContent = "S. Aidar"
    } else {
        textElement.textContent = "Sharipov Aidar" // Change the text back for screens larger than 600px
    }
});