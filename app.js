let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElementos('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElementos('p', 'El número secreto es menos');
        } else{
            asignarTextoElementos('p','El número secreto es mayor');
        }
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElementos('p', 'Ya se sortearon todos los números posibles');
    } else {

    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}
}

function condicionesIniciales(){
    asignarTextoElementos('h1', 'Juego del número secreto');
    asignarTextoElementos('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();