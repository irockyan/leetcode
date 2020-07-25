/**
 * Map
 */
let sum = (arr, target) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(arr[i], i);
  }
};

/**
 * Obj
 */

let sum01 = (arr, total) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let diff = total - item;
    if (obj[diff]) {
      return [obj[diff], i];
    }
    obj[item] = i;
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let sumTotal = 13;

console.log(sum(arr, sumTotal));
console.log(sum01(arr, sumTotal));
