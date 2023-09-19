const blob = document.getElementById("blob")

var mouseX = 0
var mouseY = 0


document.body.onpointermove = event => {
    const { clientX, clientY} = event

    // blob.style.left = `${clientX}px`
    // blob.style.top = `${clientY}px`

    mouseX = clientX
    mouseY = clientY

    blob.animate({
        left: `${mouseX}px`,
        top: `${mouseY}px`
    }, {duration: 1600, fill: "forwards"})
}

// document.addEventListener('keydown', function(event){
//     blob.animate({
//         top: `${mouseY}px`
//     }, {duration: 1600, fill: "forwards"})
// })

document.addEventListener('scroll', function(event){
    var scrollPosition = window.pageYOffset
    blob.style.transform = 'translateY(' + scrollPosition + 'px)';
})