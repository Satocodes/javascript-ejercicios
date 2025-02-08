// funcion normal
const greeting = function (name){
    return `Hi, ${name}!`;
}

const newGreeting = (name) => `Hi, ${name}!`; // Arrow function retorna la variable implisitamente

const newImplicitWithTwoParams = (name, age) => `Hi, ${name}! You are ${age} years old.`;


// Lexical Binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message){
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
        
    }   

}   

fictionalCharacter.messageWithTraditionalFunction('Hello, world!'); // Uncle Bob says: Hello, world!
fictionalCharacter.messageWithArrowFunction('Hello, world!'); // undefined says: Hello, world!

// Arrow functions no tienen su propio this, por lo que toman el this del contexto en el que se encuentran
// En este caso, el this de la arrow function es el this del contexto global, que es undefined

// En cambio, las funciones normales si tienen su propio this, por lo que toman el this del