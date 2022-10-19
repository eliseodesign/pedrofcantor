


// desplegar menu en mobile 

let ham_menu = document.getElementById("menu");
let list_menu = document.getElementById("nav_menu");
let modal_menu = document.getElementById("modal_menu")


 
ham_menu.addEventListener('click', e =>{


    list_menu.classList.toggle('despliege'); // desplegar menu
    modal_menu.classList.toggle('display-block'); // modal o capa con efecto blur
    ham_menu.classList.toggle("change") // cambio de icono hamburgesa


});
 
modal_menu.addEventListener('click', e =>{
    list_menu.classList.toggle('despliege');
    modal_menu.classList.toggle('display-block');
    ham_menu.classList.toggle("change")
});


// let menuOn = list_menu.classList.contains('despliege') ;
// let withOn = window.innerWidth >= 720;




if(window.innerWidth >= 720) {

    

    list_menu.classList.remove('despliege');
    modal_menu.classList.remove('display-block');
    ham_menu.classList.remove("change")


}