

const random = Math.floor(Math.random() * 10) + 1;

const input = prompt("Ingrese un número aleatorio de 1 a 10: ");
let numero = parseInt(input);

console.log(`${numero}`);

if (random === numero) {
  console.log(`El número es: ${random}, ¡Felicidades! ganaste un auto de 0 km`);
} else {
  console.log(`El número es: ${random}, qué lástima, te deseo suerte para la próxima vez`);
}