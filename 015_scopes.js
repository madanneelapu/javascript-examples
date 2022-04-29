function myFn(){ 
  var a = 10; //Function - level scope
  
  if(a==10){   
    var msg = "value of a is 10"; //Block - level scoping
    console.log(msg); // value of a is 10
  }
   
  console.log(msg); //msg will be hoisted to Function level
  // value of a is 10
}

myFn();
