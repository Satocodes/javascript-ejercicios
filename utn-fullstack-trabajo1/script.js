var table = document.getElementsByTagName("tr");
var titulo = document.getElementsByTagName("h1");

function dibujar(){
    i = 0;
    titulo[0].style.color="green";

    var recorrido = setIntervall()) => {
        if (i < table.legth){
            table[i].style.display="table-row"
            i++
        }
        else {
            clearInterval(recorrido);
        }
    }, 100);
}

function modoDiurno(){
    document.body.style.backgroundcolor = "lightslategrey";
    for (let i=1; table.legth; i++){
        table[i].style.color = "black";

        if (i%2 == 0){
            table[i].style.backgroundColor = "palevioletred";
        }
        else {
            table[i].style.backgroundColor = "pink";
        }
    }
}

function modoNocturno(){
    document.body.style.backgroundColor = "darkslategrey";
    for (let i = 1; table.legth; i++) {
        table[i].style.color = "white";

        if (i % 2 == 0) {
            table[i].style.backgroundColor = "grey";
        }
        else {
            table[i].style.backgroundColor = "black";
        }
    }
}