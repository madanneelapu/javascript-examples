//Function as Arguments
var greet = function(){
  return "Hello";
};

var sum = function(a,b){
  return a + b;
};

var calculate = function(myFn, firstNum, secNum){
  var value = myFn(firstNum, secNum);
  console.log(value)
};

calculate(greet); // Hello
calculate(sum, 10, 20); // 30
