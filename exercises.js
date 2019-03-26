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

function avarage(arr) {
  let count = 0;
  arr.forEach(function (num) {
    return count += num;
  });
  return count / arr.length;
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

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function (location) {
    warningCounter++;
    let times = 'times';
    if (warningCounter === 1) {
      times = 'time';
    }
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`he ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);
  };
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Excesive flooding');
const treeWarning = hazardWarningCreator('Fallen tree');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
console.log(rocksWarning);


function turtle(arr) {
  return arr.filter(array => array[0] >= 0 && array[1] >= 0);
}
const newArr = turtle([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);
function movementS(arr) {
  let stLeft = arr.map(function (array) {
    return array[0] + array[1];
  });
  stLeft.forEach(num => console.log(num));
}
movementS(newArr);
console.log(newArr);

function decoder(str) {
  let codedArr = str.split(' ');
  console.log(codedArr);

  let answer = '';

  let changedArr = codedArr.map(function(str) {
    if (str.length === 3) {
      return ' ';
    } else {
      return str[str.length - 1].toUpperCase();
    }
  });
  console.log(changedArr);
  
  console.log(changedArr.reduce((answer, currentValue = '') => answer + currentValue));
}

decoder('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');



