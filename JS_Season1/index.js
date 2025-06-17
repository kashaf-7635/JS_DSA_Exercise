
//Hoisting
// var x = 7;
// function getName (){
//     console.log("Hello Javascript");
// }

// getName();
// console.log(x);
// console.log(getName);

//How Functions works
// var x =1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x)   
// }

// function b(){
//     var x = 100;
//     console.log(x)   
// }


//Global space, window, this
// var a = 10;
// function b(){
//     var x = 10;
// }

// console.log(window.a);
// console.log(a);
// console.log(this.a);

//undefined vs not defined
// console.log(a)
// var a = 7;
// console.log(x);
// console.log(a);

// var a;
// console.log(a);
// a = 10;
// if(a===undefined){
//     console.log("a is undefined");

// }
// else{
//     console.log("a is not undefined");
// }

//loosely typed language
// var a ;
// console.log(a); 
// a = 10;
// console.log(a);
// a = "Hello world";
// console.log(a);


//scope chain 
// function a (){
//     var b = 10;
//  c();
//   function c(){
//     console.log(b);
//   }

// }

// a();
// console.log(b);  

//let, const, temporal dead zone
// let a = 10;

// console.log(a);
// var b = 100;
// var b = 1000;

// console.log(b);

// let a;
// const b = 1000;


// a=10;
// console.log(a);


//block scope and shadowing
// {
//     var a = 10;
//     console.log(a);

// } 
// if(true) console.log("something");
// if(true){
//     var a = 10;
//     console.log(a);
// }

// var a = 100;
// let b = 100;
// const c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// var c = 100;
// function x(){
//     var c = 30;
//     console.log(window.c);
//     window.c = 20;

// }
// x();
// console.log(c);

//closures

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z)

// z();


// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a, b);
//         }
//        y();
//     }
//    x();
// }

// z();

//setTimeout and closures 

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
//     console.log("Hello Javascript");

// }
// x();

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }

//     console.log("Hello Javascript");
// }
// x();

// function x() {
//     for (var i = 1; i <= 5; i++) {

//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);

//     }

//     console.log("Hello Javascript");
// }
// x();

// function outest(b) {
//     var c = 20;
//     function outer() {
//         function inner() {
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }

// let a = 100;
// outest("Hello world")()();

//Data hiding and encapsulation

// function counter(){
//     var count = 0;

//    return function incrementCounter(){
//         count ++;
//         console.log(count);

//     }
// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();

// function Counter() {
//     var count = 0;
//     console.log(this);

//     this.incrementCounter = function () {
//         count++;
//         console.log(count);

//     }
//     this.decrementCounter = function () {
//         count--;
//         console.log(count);

//     }

// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();

// counter1.decrementCounter();

// how closure related to garbage collector
// function a() {
//     var x = 0; z = 10;
//     return function b() {
//         console.log(x);
//     }
// }
// a();


// var y = a()();



//Function Statement and Function Declaration
// function a(){
//    console.log("a called");
// }
// a();

// Function Expression  (function acts like a value)
// var b = function (){
//   console.log("b called");

// }
// b();

//Anonymous Function
// function () {

// }

//Named Function Expression
// var c = function xyz(){
//     console.log("c called");
//     console.log(xyz);


//   }
//   c();

//Difference between Parameters & Arguments

//First Class Functions
// var b = function(param1){
//     return function xyz() {

//     }

// }
// console.log(b());

//Arrow Functions 


// Call back Function
//  setTimeout(function( ){
//     console.log("timer");
// }, 5000)

// function x(y){
//     y();
//     console.log("x");
// }
// x(function y(){
//    console.log("y");

// })


//Event Listeners
// function attachEventListnenrs() {
//     let count = 0
//     document.getElementById("clickMe")
//         .addEventListener("click", function xyz() {
//             console.log("Button Clicked", ++count);
//         })

// }
// attachEventListnenrs();


//Blocking the main thread
// console.log("Start");

// setTimeout(function cb(){
//   console.log("Call back")
// }, 5000);

// console.log("End");



//million of lines of code

// let startTime = new Date().getTime();
// let endTime = startTime;

// while(endTime < startTime + 10000){
//     endTime = new Date().getTime();


// }

// console.log("While Expires");

//Higher Order Function
// function x(){
//     console.log("Hello");
// }

// function y(x){
//   x();
// }


// const radius = [3, 1, 2, 4]

// calculate Area of radius
// const calculateArea = function(radius){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));

// calculate cicumference
// const calculateCircumference = function(radius){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));


//calculate Diameter
// const calculateDiameter = function(radius){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));


// Modular Code, Reusable Code, Functional way, optimized way
//DRY Principle

// const radius = [3, 1, 2, 4]

// const area = function (radius) {
//     return Math.PI + radius * radius;
// }
// const diameter = function (radius) {
//     return 2 * radius;
// }
// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }

// Array.prototype.calculate = function(logic) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(radius.map(area));
// console.log(radius.calculate(area));
// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));


// Map 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const double = (num) => {
//     return num * 2;
// }
// const triple = (num) => {
//     return num * 3;
// }
// const binary = (num) => {
//   return num.toString(2);
// }

// const output = numbers.map((num)=>num.toString(2))
// console.log(output);

//Filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const isOdd = (num)=>{
//   return num % 2;
// }
// const isEven = (num)=>{
//     return num % 2 === 0 ;
// }
// const odd = numbers.filter(isOdd);
// const even = numbers.filter(isEven);
// console.log('odd=>',odd);
// console.log('even=>',even);

// const arr = [5, 1, 3, 2, 6]

// function findSum(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce((acc, curr)=>{
//     acc = acc + curr;
//     return acc;
// }, 0)
// console.log(output);

// const findMax = (arr)=>{
//   let max = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce((acc, curr)=>{
//      if(curr > acc){
//         acc = curr;
//      }
//      return acc;
// }, 0)
// console.log(output);

// const users = [
//     { firstName: "kashaf", lastName: "ansari", age: 22 },
//     { firstName: "donald", lastName: "trump", age: 75 },
//     { firstName: "elon", lastName: "musk", age: 50 },
//     { firstName: "albort", lastName: "einstein", age: 75 },
// ]

// const fullNames = users.map(user => user.firstName + " " + user.lastName)
// console.log(fullNames);

// const uniqueAges = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});

// console.log(uniqueAges);

// const lessAges = users.filter(user => user.age < 30).map(user => user.firstName);
// console.log(lessAges);

// const lessAges = users.reduce((acc, curr)=>{
//      if(curr.age < 30){
//         acc.push(curr.firstName);
//      }
//      return acc;
// },[])
// console.log(lessAges);























