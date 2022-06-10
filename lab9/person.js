/**
 * persons.js
 */
"use strict"
// 1
const Person ={
    name :"",
    dateOfBirth:"",
    getName: function(){
        return this.name;
    },
    setName: function(newName){
        this.name=newName;
    }
    
}
let p1=Object.create(Person);
p1.setName(" Jhon");
p1.dateOfBirth = "1998-12-10";
console.log(`The person's name is:${p1.getName()} \n ${p1.getName()} was born on ${p1.dateOfBirth}`);

  // 2
  let Employee= Object.create(Person,{
      salary:{value: 0},
      hireDate:{ value:new Date()},
      dojob:{ value: function(jobTitle){
          console.log(`${this.name} is a ${jobTitle} who earns $:${this.salary} `);
         
        }}
  });
    let emp= Object.create(Employee,{salary:{value:249995.50}});
    emp.setName("Anna");
    emp.dojob("Programmer");
    console.log(emp);

    // 3 constructor-Function

    function person(newName,newDOB){
        this.name = newName;
        this.dateOfBirth = newDOB;
    }
    person.prototype.getName = function(){
        return this.name;
    };
    person.prototype.setName = function(newName){
        this.name = newName;
    };
    person.prototype.toString = function(){
        return " Name: " + this.name + " Date of Birth: " + this.dateOfBirth;
    };
    const p2 = new person("Peter","1985-11-10");
    console.log(p2.toString());
     