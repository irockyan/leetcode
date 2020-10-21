let str = "afafAfaf";

let covertStr = (str) => {
  return str
    .split("")
    .map((char) => {
      if (char.charCodeAt() < 90) {
        return char.toLowerCase();
      }
      return char.toUpperCase();
    })
    .join("");
};

console.log(covertStr(str));
