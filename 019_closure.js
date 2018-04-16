var myFun = function (){
  var a = 10;
  
  var innerFun = function(){
    console.log(a);
  };
  
  return innerFun;
}


var myInnerFunObj = myFun();
myInnerFunObj();