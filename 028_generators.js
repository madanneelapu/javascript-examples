var myGen = function*(){
    var itrValue = yield 'a';
    console.log(itrValue);

    yield 'b';
    yield 'c';
}

var itr = myGen();

var itrResult = itr.next();
console.log(itrResult); 

