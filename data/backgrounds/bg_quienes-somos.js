let backgrounds =
[
 "../../assets/css/backs/cancha.jpg", // NO CAMBIAR EL PRIMERO
 "https://i.ibb.co/Dp7fCMk/alumnos.jpg",
 "https://i.ibb.co/fSqJHb0/cancha.jpg", 
 "https://i.ibb.co/wRWD1SC/leon-pintura.jpg"
]

if(screen.width <= 720){
backgrounds =
[
    "https://i.ibb.co/s2XnztY/307348811-1677074266012683-8553132408512178177-n.jpg",
    "https://i.ibb.co/h798rgB/est5-1-Medium.jpg",
    "https://i.ibb.co/FHvc0N7/tromp.jpg",
    "https://i.ibb.co/xLzBH3T/307486139-1677072396012870-2133694301558846074-n.jpg"
]
}

const nosotrosWelcome = document.querySelector(".header");

let number = 0;

cambiarBACKGROUND(number)

setInterval(()=>{
    number++
    if (number == backgrounds.length) number = 0 
    cambiarBACKGROUND(number)
},5000)



function cambiarBACKGROUND(n){


    let BGactual = backgrounds[n]
    // nosotrosWelcome.style.background = `-webkit-linear-gradient(to bottom,hsla(0, 0%, 0%, 0.863), hsla(0, 0%, 0%, 0.342)), url()`
    if(!BGactual) BGactual = backgrounds[0]
    nosotrosWelcome.style.background = "#000"
    nosotrosWelcome.style.backgroundImage = `linear-gradient(to top, hsla(0, 0%, 0%,0.79), hsla(0, 0%, 0%,0.79), hsla(0, 0%, 0%, 0)), url("${BGactual}")`

    nosotrosWelcome.style.backgroundSize = "cover"   
    nosotrosWelcome.style.backgroundAttachment = "fixed"
    nosotrosWelcome.style.backgroundPosition = "center"

}





