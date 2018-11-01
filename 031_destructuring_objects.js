//Destructuring Objects

var myObj = {
    "firstname": "Bill",
    "lastname": "Gates",
    "company":"Microsoft",
    "jobtitle":"CEO"
};


var {firstname, jobtitle} = myObj;

console.log(`${firstname} works as a ${jobtitle}`);




var {firstname: fname, jobtitle: job} = myObj;

console.log(`${fname} works as a ${job}`);