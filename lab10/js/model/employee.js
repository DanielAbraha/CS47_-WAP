/**
 * employee.js
 */
   "use strict";
class Employee{ //extends Person{
    salary;
    hireDate;
    constructor(name,dateOfBirth,salary,hiredate){
       // super(name,dateOfBirth);
        this.salary=salary;
        this.hireDate=hiredate;

}
doJob(jobTitle){
    console.log(this.name + " is a " + jobTitle + " who earns $" + this.salary);

}
}
export default Employee