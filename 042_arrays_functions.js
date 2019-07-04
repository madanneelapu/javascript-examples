const employees = [
    {name:'Raju', experience: 11, salary: 150000.00},
    {name:'Murthy', experience: 9, salary: 101000.00},
    {name:'Suresh', experience: 15, salary: 230000.00},   
    {name:'Rajesh', experience: 4, salary: 80000.00},
    {name:'Sathish', experience: 2, salary: 50000.00},
    {name:'Koti', experience: 6, salary: 90000.00}
];


//forEach
employees.forEach(emp => console.log(emp.name));

//filter
const seniorEmps = employees.filter(emp => emp.experience > 6);
seniorEmps.forEach(emp => console.log(emp));

//map
const empsAndExp = employees.map(emp => `${emp.name} (${emp.experience} Years)`);
empsAndExp.forEach(emp => console.log(emp));

//sort
const empByExp = employees.sort((a, b) => a.experience < b.experience ? 1 : -1);
empByExp.forEach(emp => console.log(emp));

//reduce
const totalSalary = employees.reduce((total, emp)=>(total + emp.salary), 0);
console.log(totalSalary);


