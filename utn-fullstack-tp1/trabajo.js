var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']; //vector con cantidad de meses

var diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // vector con dias de cada mes

console.log("Meses con 31 dias:\n");
for (let i = 0; i < meses.length; i++) {
    
    if (diasDelMes[i] == 31){
        console.log(meses[i]);
    }

    
}
console.log("Meses con 30 dias:\n");
for (let i = 0; i < meses.length; i++) {


   
    if (diasDelMes[i] == 30) {
        console.log(meses[i]);
    }

}
