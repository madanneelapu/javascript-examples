//Function
function myPrint(){ //definition
  console.log("Hello");
}

myPrint(); //execution

//parameters
function greet(name, message){
   console.log("Hello, "+name+". "+message);
}

greet("Madan","How are you");

//Returning from functions
function greet2(name){
   return "Good Day, "+name;
}

var returnMsg = greet2("Madan");
console.log(returnMsg);


