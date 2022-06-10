import Person from "./model/person.js"
import Employee from "./model/employee.js";
const persons= [ 
    new Person("Anna Smith",new Date(1998,12,15)),
    new Person("Bob John",new Date(1945,11,16)),
    new Person("Carlos Slim Helu",new Date(1976,9,24))
]
persons.forEach(e=>console.log(e.toString()));
const jim = new Employee("Jim Hanson",new Date(1945,11,16),249990.00,new Date(2020,13,5));
jim.doJob("Softwate Engineer");