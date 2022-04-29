//Writing

var myObj = {};
console.log(typeof(myObj)); // Object

myObj.myPropOne = 10;
console.log(myObj);

myObj.myPropTwo = "Sajix";
console.log(myObj);

myObj.myPropThree = true;
myObj.myPropFour = null;

console.log(myObj);



//Reading
var person = {};
person.firstname = "Madan";
person.lastname = "Neelapu";
person.middlename = null;

console.log(person.firstname);
console.log(person.middlename);
console.log(person.prefix);


//Object Literal

var student = {
  "name": "bhoolaxmi",
  "gender": "F",
  "class": 10,
  "feepaid": true
};

console.log(student);
console.log(student.class);
console.log(typeof(student.class)); // Number

//Dot Notation
console.log(student.name);

// Bracket Notation
console.log(student["name"]);


//Where to use bracket notation?
//Avoid numbers as keys
var myObj = {
  0: "Madan",
  1: "Neelapu"
}
console.log(myObj);
console.log(myObj["0"]);


//Nested Objects

var employee = {
  "firstname":"Swathi",
  "empid":2063,
  "address":{
    "street":"CBM Compound",
    "city":"Vizag"
  }  
};

console.log(employee);


//Objects Equality
var emp2 = employee;

var emp3 = { // data changed
  "firstname":"Anil",
  "empid":2064,
  "address":{
    "street":"CBM Compound",
    "city":"Vizag"
  }  
};

var emp4 = { // no change in data
  "firstname":"Swathi",
  "empid":2063,
  "address":{
    "street":"CBM Compound",
    "city":"Vizag"
  }  
};

console.log(employee === emp2); // True
console.log(employee === emp3); // False
console.log(employee === emp4); // False


//Delete Operator

var hrEmp = {
  "empid":"Swathi",
  "department":"Human Resource"
};
console.log(hrEmp);

delete hrEmp.department;
console.log(hrEmp);


