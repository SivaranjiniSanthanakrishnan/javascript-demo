
// Prototype
var obj1 ={
    name: 'sss'
}

var obj2 = {
    age:23
}

obj1.__proto__ = obj2;
// console.log(obj1);
// console.log(obj1.__proto__.age); // 23
// console.log(obj1.age); //23


// 2
let pet = {
    eats : true
}
let dog = Object.create(pet);
// console.log(dog)
// console.log(dog.eats); 
// console.log(Object.getPrototypeOf(dog)===pet); 
// Object.setPrototypeOf(dog, {});
// console.log(dog.eats); 
// console.log(Object.getPrototypeOf(dog)===pet); 




// Let vs var

function sayHello() {
  for(var i=0; i<5; i++) {
      console.log(i)
  }
  console.log(i)
}
sayHello()


// Object
const person = {
    name: 'XXX',
    walk: function() {
        return 1;
    },
    talk() {
        return 1
    }
}

// Bracket Notation
console.log(person['name']);


// This Keyword accessibility
const person = {
  name: "Mosh",
  walk() {
      console.log(this)
      return 0;
  }
}
// person.walk();
const response = person.walk;
response();

// This Keyword Accessibility  x
var obj = {
  a : 10,
  b : () => {
    a = 5
    return this.a;
  }
  }
  // console.log(obj.b())


// Map vs Filter vs forEach
var jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
]

const activeJobs = jobs.filter(job => job.isActive);
const convertActiveJobs = jobs.map(job => {
  job.isActive = true
  return job
});
jobs.forEach(job => job.isActive = true);
console.log(jobs);


// Reduce function
var numbers = [1,2,4];

const sum = numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue
}, 0);
console.log(sum);


// Template litral
var name = 'XXX';
console.log(`Name is ${name}`);

// Object Destructuring
const address = {
    street: 'XXX',
    city: 'YYY',
    country: 'India'
}
const {street:st, city:cty, country} = address;
console.log(country);

// Array destructuring
const x = [1,2,3,4,5];
const [a,b] = x;
console.log(a, b)


// Variable Hoisting
x = "xxx";
console.log(x);
var x;


callFun();
function callFun() {
    console.log('hello');
}

var x = 1;
console.log(x + ", " + y);
var y=2;

// Class and Inheritannce
import Person from './person'
import Teacher from './teacher'

const person = new Person('XXX');
person.walk();

const teacher = new Teacher('YYY','Maths');
teacher.talk();
teacher.abc();


// Fetch API x

async function fetchData() {
    const requestOptions = {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    }
    var response = await fetch('https://jsonplaceholder.typicode.com/users/1', requestOptions);
    var data = await response.json();
    console.log(data);
  }
  
fetchData();


// Promise.all x

async function fetchData() {
  
    const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users');
    const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts');
  
    var response  = await Promise.all([fetchUsers, fetchPosts]);
    console.log(response)
    var data = await Promise.all(response.map(data => data.json()));
    console.log(data);
  }
  fetchData()


// Create a Promise
function checkNumber (number) {
    return new Promise((resolve, reject)=> {
      number <10 ? reject("Number is less than 10") : resolve("Number is above 10")
    })
  }
  
  checkNumber(11)
  .then(data=> console.log(data))
  .catch(err => console.warn(err))


// Generator 1 x

function *generator() {
    yield {name:'XXX'};
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

async function *generator() {
    var response = await fetch('https://jsonplaceholder.typicode.com/users');
    var data = await response.json();
    yield data;
    const requestOptions = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name:'XXX'})
    }
    var responsePosted = await fetch('https://jsonplaceholder.typicode.com/users');
    var posted = responsePosted.json();
    yield posted
  }
  
  var iterator = generator();
  
  async function result() {
    var data = await iterator.next();
  
    console.log(data);
    data.value.map(row=> row.website = 'abc.com');
  
    var postedData = await iterator.next();
    console.log(postedData)
  }
  result()


// Try Catch Throw

function convertDollar (rupee) {
  if(typeof(rupee) === 'number') 
    return rupee * 75
  else
    throw Error('Given data is not number');
}

try{
  convertDollar('5')
} catch(err) {
  console.warn(err)
}

console.log('Hello Guys');



// Call | Apply | Bind

var printFullName = function(hometown, state) {
    console.log(`Name is ${this.firstname} ${this.lastname}. Hometown is ${hometown}, State is ${state}`);
  }
  
  var obj1 = {
    firstname : 'XXX',
    lastname : 'YYY'
  }
  
  var obj2 = {
    firstname : 'Siva',
    lastname : 'Ranjini'
  }
  
  var obj3 = {
    firstname : 'ABC',
    lastname : 'XYZ'
  }
  
  printFullName.call(obj1, "Chennai", "TN");
  printFullName.apply(obj2, ["Chennai", "Andra"]);
  var bindedFunction = printFullName.bind(obj3, "Chennai", "TN");
  console.log(bindedFunction);
  bindedFunction();


// Object.asssign() 
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
    socks
  };
  
  return myWardrobe;
};
console.log(createWardrobe());


// Getter and Setter
const address = {
  area : 'XYZ Street',
  city: 'Chennai',
  pin: 601928,
  get fullAddress () {
    return `Address is ${area}, ${city}. PIN: ${pin}`
  },
  set fullAddress(value) {
    let address = value.split(" ");
    this.area = address[0]
    this.city = address[1]
    this.pin = address[2]
  }
}

address.fullAddress = 'RadhaNagar Chrompet 600044';
console.log(address)






