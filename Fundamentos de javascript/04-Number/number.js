// 1. Tipo entero o decimal

const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. notacion sientifica

const cientifico = 5e3

// 3. Inifinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// 4. operaciones aritmeticas
// 1. SUma, Resta, MUltiplación y división

const suma = 2 + 4
const Resta = 4 - 4
const multiplicacion = 4 * 7
const division  = 16 / 2

// 2. Módulo y exponenciación
const modulo = 15 % 8
const exponenciacion = 2**3

// Precisión
const resultad = 0.1 + 0.2  //aca hay un drama con la precision
console.log(resultad)

console.log(resultad.toFixed(1)) //aca solucionamos que tenemos un solo resultado

console.log(resultad === 0.3) //aca hace la comparativa

// Operaciones avanzadas
const raizCuadrad = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrad)
console.log(valorAbsoluto)
console.log(aleatorio)