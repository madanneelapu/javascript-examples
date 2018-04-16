var callbackFn = function(){
  console.log("Hello");
};



var myExecutor = function(a, cbFun){
  if(a % 2 === 0){
     cbFun();
  }
}

myExecutor(15,callbackFn);