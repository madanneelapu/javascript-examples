var Person = function(name, age){
  this.fname = name;
  this.age= age;
};

var person1 = new Person("madan",28);

console.log(person1);


var personFun = function(name, age){
  var myObj = {};
  myObj.fname = name;
  myObj.age= age;
  return myObj;
};

var person2 = personFun("madan",28);

console.log(person2);