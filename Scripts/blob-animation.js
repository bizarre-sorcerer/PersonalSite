// Референс на тот кусок цвета
const blob = document.getElementById("blob")

// Координаты мыши
var mouseX = 0
var mouseY = 0

// Показывает позицию скролла по Y
var scrollPositionY = 0


// Анимация елемента на движения курсора, с учетом позиции скролла
document.body.onpointermove = event => {
    const { clientX, clientY} = event

    mouseX = clientX
    mouseY = clientY

    // console.log(mouseX, mouseY)

    blob.animate({
        left: `${mouseX}px`,
        top: `${mouseY + scrollPositionY}px`
    }, {duration: 1600, fill: "forwards"})
}


// Анимация елемента при скролле 
document.addEventListener('scroll', function(event){
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    scrollPositionY = scrollPosition

    // console.log(scrollPosition)

    blob.animate({
        top: `${scrollPosition+500}px`
    }, {duration: 2000, fill: "forwards"})

})