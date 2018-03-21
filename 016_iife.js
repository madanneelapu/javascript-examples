//Immediately Invoked Function Expression

var myFn = function (){
  console.log("My Function Called");
};

//myFn(); //invoking later

(function(){
  console.log("My IIFE Function Called");
})(); // invoking immediately