import Person from './person';

class Teacher extends Person {
    constructor(name, subject1, subject2){
        super(name);
        this.subject1 = subject1;   
        this.subject2 = subject2;
    }
    teach(){
        console.log(`Teacher teaches ${this.subject1} and ${this.subject2}`);
    }
}

export default Teacher;