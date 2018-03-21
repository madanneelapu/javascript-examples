function myFn(){ 
  var a = 10; //Function - level scope
  
  if(a==10){   
    var msg = "value of a is 10"; //Block - level scoping
    console.log(msg);
  }
   
  console.log(msg); //msg will be hoisted to Function level
}

myFn();