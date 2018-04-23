
/* console.log("before timeout");

setTimeout(function(){    
    console.log("JavaScript is awesome");
},2000);

console.log("after timeout"); */


/* var i;
for(i=0; i<5; i++){
  setTimeout(function(){    
        console.log(i);
    },2000);
} */


var myCbWrap = function (index) {
    return function () {
        console.log(index);
    };
}

var i;
for (i = 0; i < 5; i++) {
    setTimeout(myCbWrap(i), 2000);
}
