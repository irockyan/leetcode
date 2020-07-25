let deepCopy = (obj) => {
  let result = {}
  for (const key in obj) {
      let value = obj[key]
      if(Object.prototype.toString.call(value) === "[object Object]"){
          result[key] = deepCopy(value)
      }else {
          result[key] = value
      }
  }
  return result
}


let a = {
    name: "zyan",
    age: 18,
    class: [0,2,2,3,4]
}
// let b = {...a}
let b = deepCopy(a)
a.age = 20
a.class[0] = 10
console.log(a)
console.log(b)