/* Set objects are collections of values. 
You can iterate its elements in insertion order. 
A value in a Set may only occur once; it is unique in the Set's collection.
*/
(function(){

    var fruits = new Set();

    fruits.add("apple");
    fruits.add("banana").add("orange").add("apple").add("grapes").add("banana");
    console.log(fruits);

    console.log(fruits.has("orange"));
    console.log(fruits.has("berries"));

    console.log(fruits.delete("grapes"));
    console.log(fruits);

    console.log(fruits.delete("berries"));
    console.log(fruits);

    console.log(fruits.size);
   
    for(let fruit of fruits.entries()){
        console.log(fruit);
    }
   
    fruits.forEach((value) => console.log(value));

    //Remove duplicated from array
    var fruitsArray = ['apple', 'banana', 'orange', 'grapes','banana','berries','apple'];
    var uniqueFruits = new Set(fruitsArray);
    console.log(uniqueFruits);

    var uniqueFruitsArray = [...uniqueFruits];
    console.log(uniqueFruitsArray);
})();