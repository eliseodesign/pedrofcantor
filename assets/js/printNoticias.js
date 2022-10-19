// obtenemos la seccion de noticias 
const ContainNoticias = document.getElementById("noticias")
// creamos el fragmet donde inyectaremos las noticias 
const fragment = document.createDocumentFragment();

//tenemos un archivo js como base de datos de preguntas

// variable que ++ en cada vuelta para dar o no estilos al contenedor  
var vuelta = 2;

//BULCE QUE GENERARA CADA NOTICIA RECORRIENDO EL OBJETO NOTICIAS
// recorremos el numero de elementos que tenga 
for(let i = 0; i < noticias.length ;i++){
    //obtenemos la noticia actual
    let noti = noticias[i]
    //seleccionamos las partes del objeto de la noticia actual
    let title = noti.title;
    let subtitle = noti.subtitle;
    let p = noti.p;
    let img = noti.img;
    let info = noti.info;
    let leermas = noti.leermas;
    let oculto = noti.oculto;
    //inicilizamos variables que nos serviran mas tarde
    let display;
    let alt;
    // si no tiene mas contenido 
    if(!leermas) display = "none";
    
    // se alterna esta clase al crear elementos 
    if(vuelta%2==0) alt="alt"
    
    // creamos un elemento DIV que sera cada card 
    const blogCard = document.createElement("DIV");
    blogCard.classList.add("blog-card",alt);

    blogCard.innerHTML = 
    `
                <div class="meta">
                  <div class="photo" style="background-image: url(${img})"></div>
                  <ul class="details">

                    <li><i class='bx bxs-user'></i>${info[0]}</li>
                    <li> <i class='bx bxs-time-five'></i>${info[1]}</li>

                  </ul>
            </div>

            <div class="description">
                  <h1>${title}</h1>
                  <h2>${subtitle}</h2>
                  <p>${p}</p>
                  <p class="oculto">${oculto}</p>
                  <p id="p${i}" style="display:${display};" class="read-more">
                    Leer más
                  </p>
            </div>
    `
    fragment.appendChild(blogCard)
    //end codigo

    vuelta++
}
ContainNoticias.appendChild(fragment)


////////////////////////////////////////////////////77
////////////////////////////////////////////////////77
////////////////////////////////////////////////////77
////////////////////////////////////////////////////77
////////////////////////////////////////////////////77
// MOSTRAR CONTENIDO OCULTO  
const btnsLeerMas = document.querySelectorAll(".read-more")

for(let i = 0; i < btnsLeerMas.length;i++){

  btnsLeerMas[i].addEventListener("click", ()=>{
    abrirOculto(btnsLeerMas[i])
  })
}


function abrirOculto(btn){

  let oculto = btn.previousElementSibling
  oculto.classList.toggle("mostrar")



  descripcion = btn.parentElement
  meta = descripcion.previousElementSibling
  meta.classList.toggle("meta-active")

  blog_card = descripcion.parentElement
  blog_card.classList.toggle("card-active")


  if(btn.innerText == "Leer más") btn.innerText = "Leer menos"
  else btn.innerText = "Leer más"
}

