/*
ECMAScript 2015 introduces a new data structure to map values to values. 
A Map object is a simple key/value map and can iterate its elements in insertion order.
*/
var myMap = new Map();

myMap.set("apples",2);
myMap.set("bananas",{'quantity':2, 'units': 'Kgs', 'price':25});
myMap.set("lemons",30);

console.log(myMap.size);

console.log(myMap.get("apples"));
console.log(myMap.get("bananas"));
console.log(myMap.get("oranges")); //undefined

myMap.set("apples",5); //Overwrites 

console.log(myMap.get("apples"));

console.log(myMap.has('apples')); //true
console.log(myMap.has('oranges'));//false

console.log(myMap.delete('lemons')); //true
console.log(myMap.delete('oranges'));//false

for(let entry of myMap.entries()){
    console.log(entry);
} 

myMap.forEach((v,k, thisMap) => {
    console.log(`${k} ===> ${v}`); 
    console.log(thisMap);
});

console.log(myMap.clear()); //undefined - removes all entries from map
console.log(myMap);


//Objects can be used as keys in Map
myMap.set({}, "an object");
myMap.set({}, 23);

myMap.forEach((v,k) => console.log(`${k} ==> ${v}`));