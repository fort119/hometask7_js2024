/// first programm

let arr1 = ["apple", "PEAR", "BaNana", "heHGgbdGHJGJh", "DfGhJkLzXc"];

function capitaliseLetter(arr) {
  let arr2 = [];

  arr.forEach(element => {
    str = element.split("");
    for (let i = 0; i < str.length; i++) {
      if (i == 0) {
        str[i] = str[i].toUpperCase();
      } else {
        str[i] = str[i].toLowerCase();
      }
    }

    str = str.join("");
    arr2.push(str);
  });

  return arr2;
}

console.log(capitaliseLetter(arr1));

// second programm (в условии не указано, должен ли у элементов совпадать регистр. поэтому тут чисто по буквам);
let arr3 = [1, 3, 5, 7, 9, 11, "гусь"];
let arr4 = [3, 4, 2, 7, 11, 9, 5, "гусь", "1"];

function findCommonElements(arr1, arr2) {
  let commonArr = [];

  arr1.forEach(element => {
    for (let i = 0; i < arr2.length; i++) {
      if (element === arr2[i]) {
        commonArr.push(element);
      }
    }
  })

  return commonArr;
}

console.log(findCommonElements(arr3, arr4));

// third programm
let arr5 = [2, 1, 2, 6, 5, 4, 3, 11, -123, 15];

function analyzeArray(arr) {
  let resObj = {};
  let sum = 0;
  let max = 0;
  let min = arr[0];

  arr.forEach(element => {

    if (element < min) {
      min = element;
      resObj.min = min;
    } else if (element > max) {
      max = element;
      resObj.max = max;
    }

    sum += element;
    resObj.sum = sum;
    resObj.average = (sum / arr.length).toFixed(2);
  })

  return resObj;
}

console.log(analyzeArray(arr5));