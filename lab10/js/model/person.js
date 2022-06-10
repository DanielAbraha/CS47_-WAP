/**
 * person.js
 */
 class Person{
    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getName(){
        return this._name;
    }
    setName(newname){
        this._name=newname;
    }
    getDateOfBirth(){
        return this._dateOfBirth;
    }
    setDateOfBirth(dateOfBirth){
        this._dateOfBirth = dateOfBirth;
    }
    toString(){
        return `Name:${this.name},DateOfBirth:${this.dateOfBirth}`
    }
}
export default Person