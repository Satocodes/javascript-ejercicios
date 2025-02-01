// conversion de tipos

const numero = 2
const booleano = true

const resultado = numero + booleano
console.log(resultado)

// nos dara 3 porque javascript no sabe que hacer

// conversiones explicitas en typecasting (se convierten manualmente)
//conversion a int
const string = '42'
const integer = parseInt(string) // nos convierte de 
console.log(integer)


// convertir a decimal
const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

// de binario a int

const binary = '1010'
const decimal = parseInt(binary, 2) //aca lo convertimos en binario y le damos la base
console.log(decimal)
console.log(typeof decimal)

// conversiones implicitas  en typecasting (se hacen automaticamente)

const sum = '5' + 3
console.log(sum) // como el primer es string  el siguiente tambien lo convierte en string y lo concatena
// esto tambien si pongo un boolean en vez de 3 lo concatena a string

const sumWithNumber = 2 + true
console.log(sumWithNumber)
//como hay un numero el el truo se convierte en un numero 1 y lo suma como un numero


//ahora entenderemos pasoa. paso como hace implicitamente con TODAS las sumas posibles

const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue) //1010 
console.log(stringValue + numberValue) //1010
console.log(stringValue + booleanValue) // 10true

console.log(numberValue + stringValue) //1010
console.log(numberValue + numberValue) //20
console.log(numberValue + booleanValue) //11

console.log(booleanValue + stringValue) // true10
console.log(booleanValue + numberValue) // 11
console.log(booleanValue + booleanValue) // 2

//Truco: Cómo saber si JavaScript concatena o suma:

// Si hay al menos un string, JavaScript concatena.
// Si no hay ningún string, JavaScript realiza una suma.
