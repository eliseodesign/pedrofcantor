//Este sistema funcionara igual que el de noticias, teniendo un archivo como base de datos
// e imprimiendolo, tomando ayuda de la libreria moment js 
moment.lang('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
}
);


moment.lang('es');


const ContainCalendario  = document.querySelector(".calendario__body")// obtenemos la seccion de calendario body
const inyect = document.createDocumentFragment(); // creamos el fragmet donde inyectaremos los eventos calendario
calendario.sort((a, b) => moment(a.fecha) - moment(b.fecha))  //ordenar los eventos


mesCadena = undefined;

//BUCLE QUE GENERARA CADA CARD DE EVENTO // recorremos el numero de elementos que tenga 
for(let i = 0; i < calendario.length ;i++){ 

    let cal = calendario[i] // seleccionar el objeto actual del array
    let fecha = cal.fecha; //  simplificar 
    let titulo = cal.titulo;
    let desc = cal.desc;

    //////////////////////////////
    // PROCESAR FECHA CON MOMENT JS 
    /////////////////////////////


    let date = moment(fecha);
    let today = moment().format();
    let diff = date.diff(today, 'days')   

   

    let data_numero;
    if(diff <= -1){
     data_numero = "none"
    }

    if(diff => 0 && diff >= 7)  data_numero = "uno"
    if(diff > 7 && diff >= 15)  data_numero = "dos"
    if(diff > 15 && diff >= 30)  data_numero = "tres"





    let d = date.format("Do").slice(0,2)
    let m = date.format("MMM")
    let a = date.format("YYYY")


    /////////////////// 
    let imprimirMesCadena = false;

    $mes = date.format("MMMM")
    $año = date.format("YYYY")
  
    
    if(mesCadena != $mes){
      imprimirMesCadena = true
      mesCadena = $mes
    }

  




    if(imprimirMesCadena == true){
        let CardMes = document.createElement("DIV")
        CardMes.classList.add("mes-n")
        CardMes.setAttribute("data-bg", `${data_numero}`)

        CardMes.innerHTML = 
        `
            <p> ${$mes} </p>
            <span> ${$año} </span>
      
        `

        inyect.appendChild(CardMes)

    }



    /////////////////////////////
    //////////////////////////////

    if(data_numero !== "none"){ //verificar si el evento ya paso

          // creamos un elemento DIV que sera cada card 
    const CardEvento = document.createElement("DIV");
    CardEvento.classList.add("body__card");
    CardEvento.setAttribute("data-bg", `${data_numero}`)

    CardEvento.innerHTML = 
    `
                <div class="fecha">
                  <p class="dia">${d}</p>
                  <p class="mes">${m}</p>
                  <p class="año">${a}</p>
                </div>

                <div class="evento">
                  <p class="evento__titulo">${titulo}</p>
                  <p class="evento__desc">${desc}</p>
                </div>
                
    `
    inyect.appendChild(CardEvento)
    //end codigo

    }
  
}
// console.log(inyect)
ContainCalendario.appendChild(inyect)

