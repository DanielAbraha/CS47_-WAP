/**
 * person.js
 */
"use strict"
 class Person{
    name;
    dateOfBirth;
    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getName(){
        return this.name;
    }
    setName(newname){
        this.name=newname;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    };
    toString(){
        return `Name:${this.name},DateOfBirth:${this.dateOfBirth}`
    };
}
export default Person