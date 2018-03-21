//Default function Arguments

var greeting = function(msg="Hello", 
                     name = "John Doe"){
  console.log(msg+" "+name);
};

greeting("Hi","Madan");
greeting();
greeting("Hi");