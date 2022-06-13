//import person from "./model/person.js"
import Employee from "./model/employee.js";
// const persons= [ 
//     new person("Anna Smith",new Date(1998,12,15)),
//     new person("Bob John",new Date(1945,11,16)),
//     new person("Carlos Slim Helu",new Date(1976,9,24))
// ]
// //persons.forEach(e=>console.log(e.toString()));
// for(p of persons){
//     console.log(p.toString);
// }
const jim = new Employee("Jim Hanson",new Date(1945,11,16),249990.00,new Date(2020,13,5));
jim.doJob("Softwate Engineer");