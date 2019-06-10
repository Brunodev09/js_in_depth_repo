/* Syntax parsers will check for the valid syntax for the translation to machine language

Lexical enviroment is a definition of where the code stands physically is important for the compiler translation
Such as function -> var -> name of var

Execution context: As there are many lexical enviroments, the one that is currently running is managed via execution contexts

Global execution context --> Global Object + this (Global in JS = Not inside a function)
In the case of browsers Global Object -> Window = this */

var a = 'hey';

function b() {
        
}

// Therefore, if running in the browser, I can acess a as just "a" in the inspector or "window.a"


// Creation and Hoisting:

b();
console.log("hello world");

