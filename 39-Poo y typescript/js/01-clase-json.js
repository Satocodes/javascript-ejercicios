//tenemos una clase con diferentes caracteristicas pero el objeto parte de la misma
var bicicleta = { //creamos una objeto bicicleta en un json
    color: 'rojo',
    modelo : 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color; //forma 1 para cambiar el metdo
        this.color = nuevo_color; //forma 2 para cambiar el metodo color hace referencia a esta funcion con color pasandole nuevo color
        console.log(this); //muestra el cambio de esta funcion
    }
};
console.log(bicicleta) //mostramos el objeto en un console log
bicicleta.cambiaColor("Azul");