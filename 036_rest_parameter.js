//Rest paramter -  collapsing all remaining arguments of a function into one array.
//Rest parameters have to be at the last argument

/* 
Before rest parameters existed, to get all the arguments in a function 
we used arguments which is an array-like object.
The downside of using the arguments keyword is that, it returns an array-like object; 
this means you essentially cannot perform any array-methods like; Array.filer, Array.map.
Another pitfall, is that we cannot use arguments in arrow functions. 
This is because arrow-functions do not have their own this, 
and hence no arguments object either.
*/


function sum(first, ...nums){
    for(let temp of nums){
        first += temp
    }
    console.log(first);
}

sum(0, 5,10,15);    //30
sum(20, 5,10,15);   //50

