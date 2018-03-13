var employee = {
  "name":"Madan",
  "id":10225,
  "eligibleleaves":30,
  "usedleaves":12,
  "printdetails": function (){
      console.log(this.id + " " +
            this.name);
  },
  "availableleaves": function(){
    return this.eligibleleaves - this.usedleaves;
  }
};

employee2 = {
  "name":"Raju",
  "id":12365,
  "eligibleleaves":35,
  "usedleaves":5,
  "printdetails": function (){
      console.log(this.id + " " +
            this.name);
  },
  "availableleaves": function(){
    return this.eligibleleaves - this.usedleaves;
  }
};



employee.printdetails();
employee2.printdetails();

