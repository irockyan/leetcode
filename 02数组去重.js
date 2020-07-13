let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 2, 3, 4, 5, 9, 0];

//ES6方法

let fun1 = (arr) => {
  let set = new Set(arr);
  //   Array.from(set);
  //   return Array.from(set);
  return [...set];
};

console.log(fun1(arr));

/**
 * 暴力循环
 * 1. 创建一个新数组，循环老数组，如果老数组中元素没有在新数组中，则放入新数组
 */

let fun2 = (arr) => {
  let newArr = [];
  for (const item of arr) {
    if (newArr.indexOf(item) >= 0) {
      continue;
    }
    newArr.push(item);
  }
  return newArr;
};

/**
 * 利用基础库提供的方法
 * 1. filter
 */

let fun3 = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) == index;
  });
};
