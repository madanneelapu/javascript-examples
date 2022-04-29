var names = ['john','mike','jim','bill',
            'steve','mark','gorge','kim'];

//add an element at the end of array.
//Returns new length of array
names.push("Tim");

//Returns the element at the end of the array
//Removes the returned element
names.pop();

//Returns the element at the begin of the array
//Removes the returned element
names.shift();

//add an element at the begin of array.
//Returns new length of array
names.unshift("Balmer");

// add (splice-in) new elements into array.
// arg1 - index at which the new elements needs to be added
// arg2 - number of elements to be removed (including element at index in arg1)
names.splice(2,0,'jennifer','Aston');
console.log(names); // ['john', 'mike', 'jennifer', 'Aston', 'jim', 'bill', 'steve', 'mark', 'gorge', 'kim']

names.splice(2,3) // removes from source and returns ['jim', 'bill', 'steve']  

names.splice(2,1,'jennifer','Aston'); // removes from source and returns ['jim'] 
console.log(names);  //['john', 'mike', 'jennifer', 'Aston', 'bill', 'steve', 'mark', 'gorge', 'kim']


//Slice-out a piece of array into a new array 
//elements from the start argument, and up to (but not including) the end argument.
//Slice does not remove any elements from source array
var names_2 = names.slice(4);
console.log(names_2); // ['steve', 'mark', 'gorge', 'kim']
var names_3 = names.slice(4,6);
console.log(names_3); // ['steve', 'mark']

//merging arrays
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
console.log(myChildren); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']
