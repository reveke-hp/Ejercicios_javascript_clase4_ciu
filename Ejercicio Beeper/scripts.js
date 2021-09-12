

(() =>{
    let miBoton = document.getElementById("miBoton")

    miBoton.addEventListener('click',() =>{
        document.body.insertAdjacentHTML("beforeend","BEEP")
        document.body.classList.toggle("color")
    })

},false);
