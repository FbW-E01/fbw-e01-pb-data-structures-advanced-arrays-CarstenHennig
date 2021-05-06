// # Map, Filter, Reduce

// #### 1. Get total orders
// * Return the total amount of orders.

// ```javascript
// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ];
// ```

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const total = orders.reduce(function (accumulator, current) {
  //  console.log("Current Value", accumulator, current);
  return accumulator + current.amount;
}, 0);

console.log(total);

const total2 = orders.map((res) => {
  let result = 0;
  result += res.amount;
  return result;
});

console.log(total2);

// #### 2. Increment by 1
// ```javascript
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// ```
// * Create a function that increments each element in the `arrayOfNumbers` by 1.
// Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const mapArray = arrayOfNumbers.map((p) => {
  return p + 1;
});

console.log(mapArray);

// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
// ```
function filterEvens(i) {
  return i.filter((el) => el % 2 === 0);
}

function even2(i) {
  return i.filter((el) => el !== "Carsten");
}
console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));
console.log(even2(["Carsten", "Milad", "Joel"]));

// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

// * Examples

// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// ```

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function friendsFilter(source, key) {
  let mapSource = source.map((p) => {
    return p[0].toUpperCase() + p.substring(1);
  });
  return mapSource.filter((res) => res.includes(key));
}
console.log(friendsFilter(friends, "ka"));
console.log(friendsFilter(friends, "i"));

// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers.

// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20
// ```
const sum = (nums) =>
  nums.reduce((accumulator, current) => {
    return accumulator + current;
  });
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

const squareRoot = (numbers) => numbers.map((result) => Math.sqrt(result));

console.log(squareRoot([12, 24, 48]));

const getSquareRoot = (arrayOfNumbers) =>
  arrayOfNumbers.map((el) => Math.sqrt(el));
console.log(getSquareRoot([1, 2, 3]));
