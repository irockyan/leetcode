/**
 * 输入一个>1得整数，输出此整数为两个质数乘积得形式
 */

let isPrime = (n) => {
  for (let i = 2; i * i < n + 1; i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

let findPrime = (n) => {
  if (isPrime(n)) {
    return `${n}是一个质数`;
  }
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) {
      break;
    }
    let temp = n % i;
    let quotient = n / i;
    if (!temp) {
      if (isPrime(quotient)) {
        return `${quotient} * ${i}`;
      } else {
        return `${i} * ${findPrime(quotient)}`;
      }
    }
  }
};

console.log(findPrime(18));
