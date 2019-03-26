'use strict';

function max(arr) {
  let i = 0;
  let newNum = 0;

  while (i < arr.length) {
    if (arr[i] > newNum) {
      newNum = arr[i]; 
    }
    i++;
  }
  return newNum;
}

function min(arr) {
  let i = 0;
  let newNum = 0;

  while (i < arr.length) {
    if (arr[i] < newNum) {
      newNum = arr[i];
    }
    i++;
  }
  return newNum;
}

function avarage(arr){
  let count = 0;
  arr.forEach(function(num){
    return count += num;
  });
  return count/arr.length;
}


function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

function filter(arr) {
 
  return arr.filter(name => name[0] === 'R');
   
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames);
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`he ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Excesive flooding');
const treeWarning = hazardWarningCreator('Fallen tree');