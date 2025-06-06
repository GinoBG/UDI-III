let nAnt = 0;
let nAct = 1;


const sumarSerie = (act,ant) => act + ant;

const numAnt = document.getElementById("numAnt");
const numAct = document.getElementById("numAct");
const numFibo = document.getElementById("result");

const btn = document.getElementById("btn");
btn.addEventListener('click',FunctFibo);

function FunctFibo(){
    let resultado = sumarSerie(nAnt,nAct);
    nAnt = nAct;
    nAct = resultado;
    
    numAnt.innerHTML = "El Número anterior es: " + nAnt;
    numAct.innerHTML = "El Número actual es:" + nAct;
    resultado = sumarSerie(nAnt,nAct);
    numFibo.innerHTML = "El Número Fibonacci Siguiente es: " + resultado;
    
}