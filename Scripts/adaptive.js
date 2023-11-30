var width = window.innerWidth;

// Это в случае если в ручную меняют размер экрана
window.addEventListener("resize", function() {

    // Change the html file displayed for mobile users for mobile version of the app 
    if (width <= 600) {
        window.location.href = "indexMobile.html";
    }
});