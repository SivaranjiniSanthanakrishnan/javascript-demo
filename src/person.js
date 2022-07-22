
class Person {
    // Class members
    // Class methods

    // First function to execute in a class
    // Called by default when we create obj for class
    constructor(name){
        this.personName = name
    }
    walk(){
        console.log(`Person Name is ${this.personName}`)
    }
}
export default Person;

    