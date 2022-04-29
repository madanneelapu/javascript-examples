var employee = {
  "name":"Madan",
  "id":10225,
  "eligibleleaves":30,
  "usedleaves":12,
  "printdetails": function (){
      console.log(employee.id + " " +
            employee.name);
  },
  "availableleaves": function(){
    return employee.eligibleleaves - employee.usedleaves;
  }
};

console.log(employee.id);
employee.printdetails(); // 10225 Madan
var leaves = employee.availableleaves();
console.log(leaves); // 18

