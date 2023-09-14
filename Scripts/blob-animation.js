const blob = document.getElementById("blob")

document.body.onpointermove = event => {
    const { clientX, clientY} = event

    // blob.style.left = `${clientX}px`
    // blob.style.top = `${clientY}px`
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 1800, fill: "forwards"})
}

