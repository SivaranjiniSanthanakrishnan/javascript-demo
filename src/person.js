var a = 123;
class Person {
  constructor(name) {
    this.personName = name;
    let pName = name;
  }
  listen() {
    // class methods
    console.log(`${this.personName} is listening to lecture `);
  }
  walk() {
    console.log(this.personName);
  }
}

export var a;
export const key = "SWERA";
export var obj1 = {
  name: "XXX",
  age: 20,
};
export var arr = [1, 2, 3, 4, 5];
export default Person;
