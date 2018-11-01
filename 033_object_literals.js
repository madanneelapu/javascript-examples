//Object Literals - Enhancements in ES6

function makeObject(name, state, country){
    
    //var tempObj = {"name": name, "state": state, "country": country};
    
    var tempObj = {name, state, country};
    return tempObj;
}

var myObj = makeObject("Mark", "Palo Alto", "California");
console.log(myObj);




function makeObjectWithMethod(name, state, country){
    var tempObj = {name, state, country,
            printInfo(){       
                console.log(`${name} lives in ${state}, ${country}`);
            }            
        };
    return tempObj;
}

var myObj2 = makeObjectWithMethod("Mark", "Palo Alto", "California");
console.log(myObj2);
myObj2.printInfo();
