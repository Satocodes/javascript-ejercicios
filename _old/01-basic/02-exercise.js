/*
We have a function named "solution" and we got a parameter in this function named "secret". 
We need to return true if the number "secret" 
is higher than 5 and false if the number is minor or equal to 5.
*/

function solution(secret) {
    return !(secret <= 5);
  }
  
  // Tests

console.log(solution(1));
console.log(solution(5));
console.log(solution(10));