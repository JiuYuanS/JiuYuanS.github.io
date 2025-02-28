//弹出提示框
alert("Hello, World!");
//let可以存储不同类型的值
let time = 1;
time = "a";
//常量用const表示，只能赋值一次
const PI = 3.1415926;
//条件语句
if (time === 1) {
  console.log("time is 1");
} else if (time === "a") {
  console.log("time is a");
} else {
  console.log("time is neither 1 nor a");
}
//循环语句
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//数组
let arr = [1, 2, 3, 4, 5];
//遍历数组
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//对象
let obj = {
  name: "John",
  age: 30,
  city: "New York"
};
//遍历对象
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}
//函数
function sayHello(name) {
  console.log("Hello, " + name + "!");
}
sayHello("John");
//箭头函数
let add = (a, b) => a + b;
console.log(add(2, 3)); // 5
//类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("Hello, my name is " + this.name + "!");
  }
}