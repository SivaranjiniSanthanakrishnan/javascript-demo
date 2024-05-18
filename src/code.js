// Prototype
var obj1 = {
  name: "sss",
};

var obj2 = {
  age: 23,
};

obj1.__proto__ = obj2;
console.log(obj1);
console.log(obj1.__proto__.age); 
console.log(obj1.age); 

// 2
let pet = {
  eats: true,
};
let dog = Object.create(pet);
console.log(dog)
console.log(dog.eats);
console.log(Object.getPrototypeOf(dog)===pet);
Object.setPrototypeOf(dog, {});
console.log(dog.eats);
console.log(Object.getPrototypeOf(dog)===pet);

// Let vs var

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sayHello();

// Object
const person = {
  name: "XXX",
  walk: function () {
    return 1;
  },
  talk() {
    return 1;
  },
};

// Bracket Notation
console.log(person["name"]);

// This Keyword accessibility
// Example 1
const person = {
  name: "Mosh",
  walk() {
    console.log(this);
    return 0;
  },
};
// person.walk();
const response = person.walk;
response();

// Example 2
var obj = {
  a: 10,
  b: () => {
    a = 5; // Simple a=5 means it will create the value in global variable
    return this.a;
  },
};
console.log(obj.b());

// Example 3
var obj = {
  a: 10,
  b: () => {
    return this.a;
  },
};
console.log(obj.b());

// Example 4
var obj = {
  a: 10,
  b: function () {
    a = 5;
    return this.a;
  },
};
console.log(obj.b());

// Example 5
var obj = {
  a: 10,
  b() {
    a = 5;
    return this.a;
  },
};
console.log(obj.b());

// Map vs Filter vs forEach
var jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);
const convertActiveJobs = jobs.map((job) => {
  job.isActive = true;
  return job;
});
jobs.forEach((job) => (job.isActive = true));
console.log(jobs);

// Reduce function
var numbers = [1, 2, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// Template litral
var name = "XXX";
console.log(`Name is ${name}`);

// Object Destructuring
const address = {
  street: "XXX",
  city: "YYY",
  country: "India",
};
const { street: st, city: cty, country } = address;
console.log(country);

// Array destructuring
const x = [1, 2, 3, 4, 5];
const [a, b] = x;
console.log(a, b);

// Variable Hoisting
x = "xxx";
console.log(x);
var x;

callFun();
function callFun() {
  console.log("hello");
}

var x = 1;
console.log(x + ", " + y);
var y = 2;

// Class and Inheritannce
import Person from "./person";
import Teacher from "./teacher";

const person = new Person("XXX");
person.walk();

const teacher = new Teacher("YYY", "Maths");
teacher.talk();
teacher.abc();

// Fetch API x

async function fetchData() {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  var response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    requestOptions
  );
  var data = await response.json();
  console.log(data);
}

fetchData();

// Promise.all x

async function fetchData() {
  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users");
  const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");

  var response = await Promise.all([fetchUsers, fetchPosts]);
  console.log(response);
  var data = await Promise.all(response.map((data) => data.json()));
  console.log(data);
}
fetchData();

// Create a Promise
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    number < 10
      ? reject("Number is less than 10")
      : resolve("Number is above 10");
  });
}

checkNumber(11)
  .then((data) => console.log(data))
  .catch((err) => console.warn(err));

// Generator 1 x

function* generator() {
  yield { name: "XXX" };
  yield 2;
  yield 3;
}

var iterator = generator();
var response = iterator.next();
var data = response;
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Generator 2 x

async function* generator() {
  var response = await fetch("https://jsonplaceholder.typicode.com/users");
  var data = await response.json();
  yield data;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "XXX" }),
  };
  var responsePosted = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  var posted = responsePosted.json();
  yield posted;
}

var iterator = generator();

async function result() {
  var data = await iterator.next();

  console.log(data);
  data.value.map((row) => (row.website = "abc.com"));

  var postedData = await iterator.next();
  console.log(postedData);
}
result();

// Generator 3
function* squareNos(max) {
  let n = 0;
  while(n<max) {
    n++;
    yield n*n;
  }
}
for(let n of squareNos(10)) {
  console.log(n);
}

// Difference between yield and await
The await call successfully returns a future. yield appends a value to the output stream of the async* function that surrounds it. It is similar to return, but it does not terminate the function. It generates a sequence of values (Unlike regular functions, which only return a single value).

// Try Catch Throw

function convertDollar(rupee) {
  if (typeof rupee === "number") return rupee * 75;
  else throw Error("Given data is not number");
}

try {
  convertDollar("5");
} catch (err) {
  console.warn(err);
}

console.log("Hello Guys");

// Call | Apply | Bind

var printFullName = function (hometown, state) {
  console.log(
    `Name is ${this.firstname} ${this.lastname}. Hometown is ${hometown}, State is ${state}`
  );
};

var obj1 = {
  firstname: "XXX",
  lastname: "YYY",
};

var obj2 = {
  firstname: "Siva",
  lastname: "Ranjini",
};

var obj3 = {
  firstname: "ABC",
  lastname: "XYZ",
};

printFullName.call(obj1, "Chennai", "TN");
printFullName.apply(obj2, ["Chennai", "Andra"]);
var bindedFunction = printFullName.bind(obj3, "Chennai", "TN");
console.log(bindedFunction);
bindedFunction();

// Object.asssign()
// Difference between Object.assign and normal assigmnent = is normal assignment will share reference memory for all properties in the object where as Object.assign() will share reference memory only for nested objects. 
// multiple objects can be assigned using Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// Object property shorthand

const createWardrobe = () => {
  let hat = 1;
  let shorts = 5;
  let jumper = 8;
  let socks = 2;
  let myWardrobe = {
    hat,
    shorts,
    jumper,
    socks,
  };

  return myWardrobe;
};
console.log(createWardrobe());

// Getter and Setter
// setter is used to validate the value before setting the property to its value
const address = {
  area: "XYZ Street",
  city: "Chennai",
  pin: 601928,
  get fullAddress() {
    return `Address is ${area}, ${city}. PIN: ${pin}`;
  },
  set fullAddress(value) {
    let address = value.split(" ");
    this.area = address[0];
    this.city = address[1];
    this.pin = address[2];
  },
};

address.fullAddress = "RadhaNagar Chrompet 600044";
console.log(address);

// Scope of Variables
// Example 1
{
  if (5 > 4) {
    let str;
    {
      str = "HTC Global";
      console.log(str);
    }
    console.log(str);
  }
  console.log(str);
}

// Example 2
{
  if (5 > 4) {
    {
      let str = "guvi geek";
    }
    console.log(str);
  }
  console.log(str);
}

// Example 3
{
  if (5 > 4) {
    var str = "guvi";
    var str = "hello";
    {
      let str = "geek";
      console.log(str); // geek
    }
    console.log(str); // hello
  }
  console.log(str); // hello
}

// Example 4
{
  if (5 > 4) {
    let str = "guvi";
    {
      let str = "geek";
      console.log(str); // geek
    }
    console.log(str); // guvi
  }
  console.log(str); // ReferenceError
}

// Example 5
const a = "Hello";
a = "How are you";
console.log(a);

// Spread Operator
let arr1 = [1, 5, 9];
let arr2 = [2, 4, 8];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

let obj1 = {
  name: "XXX",
  age: 25,
};
let obj2 = {
  email: "xx@gmail.com",
  address: "Chennai",
};
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const ob1 = { name: "Test", age: 25 };
const ob2 = { ...ob1, age: 24, address: "Chennai" };
console.log(ob2);

let o1 = { name: "Test", age: 25 };
const prop = "name";
const o2 = { ...o1, age: 24, [prop]: "HTC" };
console.log(o2);

// Rest Prameter
let sumNumbers = (...nos) => {
  let sum = 0;
  for (let i of nos) {
    sum = sum + i;
  }
  return sum;
};

let sum = sumNumbers(2, 4, 6, 7, 9, 10, 45, 26, 19, 57, 36, 17);
console.log(sum);

// Function currying using bind
// Curring with bind function will make a multiple copy of that function and we may have control over the argument which we pass for different copies of that function

const multiply = (a, b) => {
  return a*b;
}

const multiplyOne = multiply.bind(this, 2);
multiplyOne(3);

const multiplyTwo = multiply.bind(this,2);
multiplyOne(4);

// Currying using clousers
// currying function is like HOF which will return the function. Currying breaks down a complex function into smaller, reusable units. We may pass arguments to the returned function. Each curried function focuses on a single argument, making it easier to understand and maintain
let multiply = function (a) {
  return function(b) {
    return function(c) {
      return a*b*c;
    }
  }
}

const firstReturned = multiply(2);
const secondReturned = firstReturned(3);
const thirdReturned = secondReturned(4);
console.log(thirdReturned);

// Debouncing will call the function if the user leaves the certain gap in between events
// Example: Search event=> school(pause /'Function triggered after pause of 300ms') bag (pause /'Function triggered after pause of 300ms')

// Throttling will call the function with the interval of standard time (e.g 300ms),
//  even if the user didn't leave gap inbeteen events and if user continuously triggers the event.
// Example: Search event=> school(nopause /'Function triggered after 300ms')bag(nopause /'Function triggered after 300ms')list

// Event bubbling
// Consider you are having 3 divs inside each other, grandparent, parent and child. bubbling is when you do onClick on child div, all three divs in the order of child to grandparent will be executed.
// The second boolean parameter on onClick event makes it to behave either bubbling or capturing. By default its behaviour is bubbling and its value is false

document.querySelector("#grandparent")
.addEventListener("click", () => {
  console.log("This is grandparent");
}, false);
document.querySelector("#parent")
.addEventListener("click", () => {
  console.log("This is parent");
}, false);
document.querySelector("#child")
.addEventListener("click", () => {
  console.log("This is child");
}, false);

// Output of Child click
This is child
This is parent
This is grandparent

// Event capturing
// with the same three divs if second parameter is given as true the it will behave like capturing. Capturing is executing the divs from top to bottom (Grandparent to child)

document.querySelector("#grandparent")
.addEventListener("click", () => {
  console.log("This is grandparent");
}, true);
document.querySelector("#parent")
.addEventListener("click", () => {
  console.log("This is parent");
}, true);
document.querySelector("#child")
.addEventListener("click", () => {
  console.log("This is child");
}, true);

// Output of Child click
This is grandparent
This is parent
This is child

// Mixed of bubbling and capturing
document.querySelector("#grandparent")
.addEventListener("click", () => {
  console.log("This is grandparent");
}, true);
document.querySelector("#parent")
.addEventListener("click", () => {
  console.log("This is parent");
}, false);
document.querySelector("#child")
.addEventListener("click", () => {
  console.log("This is child");
}, true);

// Output of Child click
This is grandparent
This is child
This is parent

// In the above case only parent behaves like bubbling and all other behaves capturing. Hence capturing is executed first executing grandparent and child and then executing parent with bubbling method.
// In case of mixed bubbling and capturing, capturing is given a first priority and then bubbling

// To stop this bubbling and capturing e.stopPropogation() function is used

// Stop Propogation at first
document.querySelector("#grandparent")
.addEventListener("click", (e) => {
  e.stopPropogation()
  console.log("This is grandparent");
}, true);
document.querySelector("#parent")
.addEventListener("click", () => {
  console.log("This is parent");
}, false);
document.querySelector("#child")
.addEventListener("click", () => {
  console.log("This is child");
}, true);

// Output of Child click
This is grandparent
// In the above when child is clicked it is seen as capturing true and then it will exe grandparent where it wil see stopPropogation. Hence it will stop propogation after executing grandparent.


// Stop Propogation at last
document.querySelector("#grandparent")
.addEventListener("click", (e) => {
  console.log("This is grandparent");
}, true);
document.querySelector("#parent")
.addEventListener("click", () => {
  console.log("This is parent");
}, false);
document.querySelector("#child")
.addEventListener("click", (e) => {
  e.stopPropogation();
  console.log("This is child");
}, true);

// Output of Child click
This is grandparent
This is Child

// It will see stop propogation at chilc only, hence when execution come to child it will exe child and then stop propogation.


// Event Delegation
// Event Delegation is possible because of Event bubbling. Event delegation is used incase of multiple onclick events.
// Instead of writing multiple event handles in each html element under the same parent, which has same functionality, we can writ single onClick event in parent and write it's functionality dynamically.
// When the child element is clicked, parent's onClick event will be automatically called with the child's id in the property e.target.id
// Example is given in index.html
// Limitations: Events like blur, focus and resize will not bubble up.


// Polyfill - Writing own bind function


// Custom Apply Function
Function.prototype.myOwnApply = function (obj, args) {
    var self = this;
    console.log(obj, args);
    self.call(obj, ...args);
}

function teacher (stud1, stud2) {
    return `${this.name} is teaching good for students ${stud1} and ${stud2}`;
}

let teacherObj = {
    name: "Malar Teacher"
}

console.log(teacher.myOwnApply(teacherObj, ["Rathish", "Rakesh"]));



// Custom Call Function

Function.prototype.myOwnCall = function (obj, ...params) {
    let self = this;
    let output = self.bind(obj, ...params) ();
    return output;
}

function teacher (stud1, stud2) {
    return `${this.name} is teaching good for students ${stud1} and ${stud2}`;
}

let teacherObj = {
    name: "Malar Teacher"
}

console.log(teacher.myOwnCall(teacherObj, "Rathish", "Rakesh"));

// Custom Bind Function

Function.prototype.myOwnBind = function (obj, ...params) {
    let self = this;
    return function (...bindFnParams) {
        return self.apply(obj, [...params, ...bindFnParams]);
    }
}

function teacher (stud1, stud2, stud3) {
    return `${this.name} is teaching good for students ${stud1}, ${stud2} and ${stud3}`;
}

let teacherObj = {
    name: "Malar Teacher"
}

let bindFunction = teacher.myOwnBind(teacherObj, "Rathish", "Rakesh");
console.log(bindFunction("Yokesh"));

// Call Back functions priority (setImmediate, nextTick will work on backend javascript only)
console.log("Start");

setTimeout(function () {
  console.log("setTimeout callback");
}, 0);

Promise.resolve(1).then(() => {
  console.log("Promise executed");
});

setImmediate(function () {
  console.log("setImmediate callback");
}, 0);

process.nextTick(() => {
  console.log("next tick executed");
});
console.log("End");

// Output
Start 
End 
next tick executed
Promise executed
setImmediate callback
setTimeout callback



// Closure Property
function incrementer(val) {
  let a = val;
  let obj = {
    increment: function increment() {
      a = a + 1;
      return a;
    },
  };
  return obj;
}

const { increment } = incrementer(10);

console.log(increment());
console.log(increment());
console.log(increment());


// Map Datastructure to find duplicates
function countDuplicates(array) {
  // Create a new Map to store the count of each element
  const countMap = new Map();

  // Iterate over the array
  for (let item of array) {
    // If the item already exists in the Map, increment its count
    if (countMap.has(item)) {
      countMap.set(item, countMap.get(item) + 1);
    } else {
      // Otherwise, add the item to the Map with count 1
      countMap.set(item, 1);
    }
  }

  // Create an object to store the count of duplicates
  const duplicates = {};

  // Iterate over the Map and populate the duplicates object
  countMap.forEach((count, item) => {
    if (count > 1) {
      duplicates[item] = count;
    }
  });

  return duplicates;
}

// Example usage
const array = [1, 2, 3, 4, 2, 3, 4, 5, 2, 2];
const duplicates = countDuplicates(array);
console.log(duplicates); // Output: { '2': 4, '3': 2, '4': 2 }


// Anagram Grouping
// Write a function that takes an array of strings and groups the strings that are anagrams of each other into arrays.

function groupAnagrams(strs) {
  const anagramGroups = new Map();

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!anagramGroups.has(sortedStr)) {
      anagramGroups.set(sortedStr, []);
    }
    anagramGroups.get(sortedStr).push(str);
  }

  return Array.from(anagramGroups.values());
}

// Example usage
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const anagramGroups = groupAnagrams(words);
console.log(anagramGroups);


// To find no. of digits in a number at constant time
let num = 1234;
let data = Math.floor(Math.log10(num) + 1);
console.log(data);



// Singleton class definition
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // Initialize the instance if it doesn't exist
      this.data = []; // Example: shared resource or state
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  // Example method to demonstrate the Singleton's functionality
  addToData(value) {
    this.data.push(value);
  }

  // Example method to demonstrate the Singleton's functionality
  printData() {
    console.log(this.data);
  }
}

// Export the Singleton instance (optional)
module.exports = new Singleton();




// Microservice Communication (RabbitMQ)
// Producer
const amqp = require('amqplib');

async function produce() {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    // Declare a queue
    const queueName = 'events';
    await channel.assertQueue(queueName);

    // Send messages to the queue
    const message = 'Hello from Producer!';
    channel.sendToQueue(queueName, Buffer.from(message));

    console.log(`Message sent: ${message}`);

    // Close connection
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

produce();


// Consumer
const amqp = require('amqplib');

async function consume() {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    // Declare the same queue
    const queueName = 'events';
    await channel.assertQueue(queueName);

    // Consume messages from the queue
    console.log('Waiting for messages...');
    channel.consume(queueName, (msg) => {
      if (msg !== null) {
        console.log(`Received message: ${msg.content.toString()}`);
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

consume();


// async_hooks maintaining the lifecycle of async events

const async_hooks = require('async_hooks');

// Create a new AsyncHooks instance
const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    // Log the creation of asynchronous resources
    console.log(`Async resource created: asyncId=${asyncId}, type=${type}`);
  },
  before(asyncId) {
    // Log the execution of asynchronous operations
    console.log(`Async operation started: asyncId=${asyncId}`);
  },
  after(asyncId) {
    // Log the completion of asynchronous operations
    console.log(`Async operation completed: asyncId=${asyncId}`);
  },
  destroy(asyncId) {
    // Log the destruction of asynchronous resources
    console.log(`Async resource destroyed: asyncId=${asyncId}`);
  }
});

// Enable the Async Hooks
asyncHook.enable();

// Example usage of asynchronous resources
const timeoutId = setTimeout(() => {
  console.log('Timeout callback executed');
}, 1000);

const intervalId = setInterval(() => {
  console.log('Interval callback executed');
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);





// Closure property example
let val = [];

for (let i = 0; i < 3; i++) {
  val[i] = () => {
    console.log("in scope", i);
  };
}

val[0]();
val[1]();
val[2]();


export class Singleton {
    constructor(data) {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        this.data = data;
        return Singleton.instance;
    }

    static getInstance() {
        return Singleton.instance || new Singleton();
    }

    someMethod() {
        console.log("Doing something...", this.data);
    }
}

