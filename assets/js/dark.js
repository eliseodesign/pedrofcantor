
const bdark = document.getElementById('bdark')
// const bdark = document.querySelector('bdark');
const body = document.querySelector('body');


load();

loa();


 
bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    bdark.classList.toggle('active');
    store(body.classList.contains('darkmode'));
    store(bdark.classList.contains('active'));
});

function load(){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        store('false');
    }else if(darkmode == 'true'){
        body.classList.add('darkmode');
        
    }

}


function loa(){
    const dark = localStorage.getItem('active');

    if(!dark){
        store('false');
    }else if(dark == 'true'){
        bdark.classList.add('active');
        
    }

}


function store(value){
    localStorage.setItem('darkmode', value);
    localStorage.setItem('active', value);
}





