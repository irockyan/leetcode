/**
 * 排序算法
 */

let randArr = (arr, length) => {
  if (arr.length >= length) {
    return arr;
  }
  let num = Math.floor(Math.random() * 20);
  !arr.includes(num) && arr.push(num);
  return randArr(arr, length);
};

let randomArr = randArr([], 10);

/**
 * 插入排序
 * 1. 假定第一个元素已经实现排序
 * 2. 取出下一个元素与已经排列好的数组从后向前进行比较
 * 3. 如果如果大于已经排序的数组中的元素，则插入此元素之后
 * 4. 如果不大于则
 */

let insertRange = (arr) => {
  console.log(`未排序的数组为${arr}`);
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      let sort = arr[j];
      if (sort > tmp) {
        arr[j + 1] = sort;
      } else {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
  console.log(`排序完的数组为${arr}`);
};

/**
 *  
 */
let quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let flag = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < flag) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(flag).concat(right);
};

// insertRange(randomArr);

console.log(quickSort(randomArr));
