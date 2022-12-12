/*
We have a function named "solution" and we got a parameter in this function named "valor". 
We need to find what type of variable is the parameter "valor" and return it in the function
*/

function solution(valor) {
    return typeof valor
  }
  
  // Tests

console.log(solution(1));
console.log(solution("Fabian"));
console.log(solution(true));