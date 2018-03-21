var names = ['john','mike','jim','bill',
            'steve','mark','gorge','kim'];

/*names.forEach(function(element, index, 
                        actualArray){
  console.log(index + "-" +element);
  //console.log(actualArray);
});*/



var myIterationFn = function(element, index, 
                        actualArray){
  console.log(index + "-" +element);
  //console.log(actualArray);
}
names.forEach(myIterationFn);


