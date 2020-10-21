/**
 * 去除字符串中最后一个指定的字符
 */

let str = "acfafafafadf123";

const splitLastOne = (str, delStr) => {
  //   //字符串方法
  //   const index = str.lastIndexOf(delStr);
  //   return str.substring(0, index) + str.substring(index + 1, str.length + 1);
  //转化为数组方法
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("")
  //     .replace(delStr, "")
  //     .split("")
  //     .reverse()
  //     .join("");
  //正则表达式
  let reg = new RegExp(`${delStr}(?=([^${delStr}]*)$)`);
  return str.replace(reg, "");
};

console.log(splitLastOne(str, "f"));
