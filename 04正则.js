// 判断字符串是否是这样组成的，第一个必须是字母，后面可以是字母、数字、下划线，总长度为5-20
let reg = /^[a-zA-Z]\w{4,19}$/
console.log(reg.test('a12333q_'))