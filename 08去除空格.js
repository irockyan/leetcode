/**
 * 写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格
 */

let a = "  1sssfc  dafafaf  ";
let trim = (str, type) => {
  let reg = {
    left: /^\s*/g,
    right: /\s*$/g,
    middle: /(\w)(\s)+(\w)/g,
    all: /\s/g,
  };
  return type === "middle"
    ? str.replace(reg[type], "$1$3")
    : str.replace(reg[type], "");
};
let d = trim(a, "middle");
console.log(d + "0000");
