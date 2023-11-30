var width = window.innerWidth;
var currentHtml = window.location.href 
var indexPath = "file:///D:/Programming/WEB/PersonalSite/Html/index.html"
var indexMobilePath = "file:///D:/Programming/WEB/PersonalSite/Html/indexMobile.html"


// Меняет html файл в зависимости от устройства 
if (width <= 600) {
    if (currentHtml == indexPath){
        window.location.href = indexMobilePath;
    } 
} else {
    if (currentHtml == indexMobilePath){
        window.location.href = indexPath;
    }
}


// Это в случае если в ручную меняют размер экрана
window.addEventListener("resize", function() {

    // Change the html file displayed for mobile users for mobile version of the app 
    if (width <= 600) {
        window.location.href = "indexMobile.html";
    }
});