//Function Expressions

//Forward reference

myPrint(); //execution before definition

function myPrint(){ //definition
  console.log("Hello");
}


//Functions are first-class variables
var myGreeting = function greeting(name){
  console.log("Hello, "+name)
};

myGreeting("Madan");

//Anonymous Function Exp
var myGreeting2 = function (name){
  console.log("Hello, "+name)
};

myGreeting2("Madan");

