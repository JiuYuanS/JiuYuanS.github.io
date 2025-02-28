//弹出提示框
alert("Hello, World!");
//let可以存储不同类型的值
let time = 1;
time = "a";
time = true;
time = null;
time = undefined;
time = {};
time = [];
time = function() {};
//获取当前时间
let now = new Date();
time = now.toLocaleString();
//常量用const表示，只能赋值一次
const PI = 3.1415926;
//console.log可以输出信息到控制台;document.write可以输出信息到页面(不常用)
console.log(PI);
//document.write(PI); 
//模板字符串
let message = `welcome, ${time}!`;
alert(message);
//函数，具名函数
function sayHello(time) {
  console.log("Hello, " + time + "!");
}
sayHello("John");
//匿名函数
let sayHi = function(time) {
  console.log("Hi, " + time + "!");
}
sayHi("Jane");
//箭头函数
let add = (a, b) => a + b;
let sub = (a, b) => {
    return a - b;
}
console.log(add(2, 3)); // 5
//方法
let person = {
  name: "John",
  sayHello: function() {
    console.log("Hello, my name is " + this.name + "!");
  }
  //sayHello(){console.log("Hello, my name is " + this.name + "!");}
  };
person.sayHello(); // Hello, my name is John!
//json
let json = '{"name": "John", "age": 30, "city": "New York"}';
let a = {name: "John", age: 30, city: "New York"};
let b = JSON.stringify(a);//将对象转换为json字符串
let c = JSON.parse(b);//将json字符串转换为对象
alert(b); // {"name":"John","age":30,"city":"New York"}
alert(c.name); // John
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