/**
 * module.js
 */
"use strict";

   // 6
const count = function(){
    let counter = 0; 
    function add(){
    counter+=1;
    }
    function reset(){
    counter = 0;
    }
    return{
    add: function(){
    add();
    },
    reset: function(){
    reset();
    },
    value: function(){
    return counter;
    }
    }
    }
     let counts = count();
      counts.add();
      counts.add();
     console.log(counts.value());
     counts.reset();
     console.log(counts.value());

     //7
     /** Free variable = counter 
      * Free variable is a variable which is not declared inside a given function, but is used inside it.
       */

     // 8
         (function(){
             let counter = 0;
             function makeAdder(inc){
               counter+=inc;
             }
             makeAdder(5)
             makeAdder(5)
             console.log(counter);
         })();

    //9 
    /**- The solution is the "Module Pattern". Because by using Module Pattern, we can protect our code and avoid globals.
//Module Pattern provides privacy thanks to closure.


//(function(params) {
statements; 
}(params)); */

// 10

const Employee = (function(){
    let name;
    let age;
    let salary;
    
    
    const getAge = function(){
    return age;
    };
    const getSalary = function(){
    return salary;
    };
    const getName = function(){
    return name;
    };
    const setAge = function(newAge){
    age = newAge;
    };
    const setSalary = function(newSalary){
    salary = newSalary;
    };
    const setName = function(newName){
    name = newName;
    };
    const increaseSalary = function(percentage){
    salary = getSaraly + getSaraly()*percentage/100;
    };
    const incrementAge = function(){
    age = getAge() + 1;
    };
    return{
    setAge: setAge,
    setSalary: setSalary,
    setName: setName,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge
    };
    })();
  
    // 11
Employee.setAddress = function(newAddress){
    address = newAddress;
    }
    Employee.getAddress = function(){
    return address;
    }
    
    


