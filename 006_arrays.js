var names = ["madan","bhoolaxmi",
             "praveen"];

console.log(names);
console.log(names[0]); //Reading
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

names[0] = "Raju"; //Writing
console.log(names);

names[3] = "Swathi";
console.log(names);

names[10] = "Murthy";
console.log(names);

console.log(names.length); //Size of array

var i;
for(i=0; i < names.length; i++){ //looping
  console.log(names[i]);
}

console.log(names["0"]); // Type coersion

