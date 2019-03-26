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
console.log(avarage([3,4,1,5,4]));