// operadores de comparación

const a = 10
const b = 20
const c = '10'

console.log(a == b) // false
console.log(a == c) //true porque NO verifica que sea el tipo
console.log(a === c) //false porque es 10 en ambos pero el tipo es diferente

console.log(a != b) //es diferente en valor
console.log(a !== c) // es diferente en el valor y en el tipo

console.log(a > b) 
console.log(a <= b) 
console.log(a > c) 
console.log(a >= c) 

