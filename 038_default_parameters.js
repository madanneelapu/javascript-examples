//Default Arguments

function myLogger(name="Steve", age=50, city="New York"){
    console.log(`Hi! My Name is ${name}. I am ${age} old. I am from ${city}.`);
}

myLogger("Bill", 28, "Canada");     //Hi! My Name is Bill. I am 28 old. I am from Canada.

myLogger();     //Hi! My Name is Steve. I am 50 old. I am from New York