//Arrow Functions (Fat Arrows)
var greet = () => console.log("Hi");
greet();


var greet2 = (name) => console.log(`Hi ${name}`);
greet2("Mark");


// arrow functions do not re-bind the 'this' keyword.
