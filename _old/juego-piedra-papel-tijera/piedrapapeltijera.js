let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

let computadora = tijera;

function jugar(opcion) {
    if(opcion === computadora) {
        console.log("Has elejido " + opcion +" La computadora elijio " + computadora +" Es un empate!")
    }else if(opcion === piedra && computadora === tijera)  {
        console.log("Has elejido " + opcion +" La computadora elijio " + computadora + " Ganaste!")
    }else if(opcion === papel && computadora === piedra)  {
        console.log("Has elejido " + opcion +" La computadora elijio " + computadora + " Ganaste!")
    }else if(opcion === tijera  && computadora === papel)  {
        console.log("Has elejido " + opcion +" La computadora elijio " + computadora + " Ganaste!")
    }
    else {
        console.log("Has elejido " + opcion +" La computadora elijio " + computadora + " Perdiste!")
    }  

    