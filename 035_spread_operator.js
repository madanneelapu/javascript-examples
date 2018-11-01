//Spread Operator  -  expanding a single variable into more
var nums = [1, 2, 3];
console.log(...nums);   //1 2 3


var nums2 = [nums, 4,5,6];
console.log(nums2);     //[ [ 1, 2, 3 ], 4, 5, 6 ]

//Unpack Array
var nums3 = [...nums, 4,5,6];
console.log(nums3);     //[ 1, 2, 3, 4, 5, 6 ]


//Copy Array 
//Now we can do things on arr2 and any changes done to arr2 will not have any effect arr.
const arr = [1, 2, 3];
const arr2 = [...arr];


//Pass elements of an array to a function as separate arguments
function sum(a,b,c){
    console.log(a+b+c);
}

var nums4 = [5,10,15];
sum(...nums4);      //30


//String (any iterable) can be unpacked
const str = 'joykare';
var strArr = [...str];
console.log(strArr);