var employee = {
  "name":"Madan",
  "id":10225,
  "eligibleleaves":30,
  "usedleaves":12,
  "printdetails": function (){
      console.log(this.id + " " +
            this.name);
  },
  "availableleaves": function(){
    return this.eligibleleaves - this.usedleaves;
  }
};

employee2 = {
  "name":"Raju",
  "id":12365,
  "eligibleleaves":35,
  "usedleaves":5,
  "printdetails": function (){
      console.log(this.id + " " +
            this.name);
  },
  "availableleaves": function(){
    return this.eligibleleaves - this.usedleaves;
  }
};



//employee.printdetails();
//employee2.printdetails();

// Binding 'this'

var myObj = {
  name: 'John Doe',
  walk: function(){
    console.log(this); // 'this' here points to the object it is used in
  }
};

myObj.walk(); // prints myObj. because we are calling the method on an object.

var fn = myObj.walk; // not calling the method, but just referring the method.
fn(); // prints 'window' object. because we calling the method 'not' on an object. This causes the 'this' to re-bind.

var fn2 = myObj.walk.bind(myObj); // binding the object to 'this'
fn2(); // prints myObj

