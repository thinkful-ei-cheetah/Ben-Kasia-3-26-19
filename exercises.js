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

console.log(max([3,4,5,1,412,5]));