
// print only repeated mark value
let arrObj = [
  { id: 1, name: "abc", mark: 50 },
  { id: 2, name: "def", mark: 60 },
  { id: 3, name: "ijk", mark: 70 },
  { id: 4, name: "lmn", mark: 60 },
  { id: 5, name: "opq", mark: 70 },
];

let map = new Map();

arrObj.forEach((ele) => {
  if (map.has(ele.mark)) {
    map.set(ele.mark, map.get(ele.mark) + 1);
  } else {
    map.set(ele.mark, 1);
  }
});

let duplicates = [];

map.forEach((count, item) => {
  if (count > 1) {
    duplicates = [...duplicates, arrObj.filter((i) => i.mark === item)];
  }
});

console.log(duplicates);

// Print unique values from array
let arr = ["Alice", "Bob", "Alice", "Harry", "Pot", "Harry"];

// Set will remove duplicates
let uniqueArr = [...new Set(arr.map((ls) => ls))];
console.log(uniqueArr);
