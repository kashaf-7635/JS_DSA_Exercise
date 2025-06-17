// Call Backs

// console.log("Hello");

// setTimeout(function () {
//     console.log("Javascript");
// }, 5000);

// console.log("Season 2");

//Callback Hell & Inversion of Control

// const cart = ["shoes", "pants", "shirts"]

// api.CreateOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet()
//         })
//     })
// })


//Promises
// const promise = createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })

// const GITHUB_API = "https://api.github.com/users/Kashaf-Ansari-3108"
// const user = fetch(GITHUB_API)

// console.log(user);

// user.then(function(data){
//     console.log(data);
//   })

//Promise Chain
// createOrder(cart)
//     .then(function (orderId) {
//        return proceedToPayment(orderId)
//     })
//     .then(function (paymentInfo) {
//        return  showOrderSummary(paymentInfo)
//     })
//     .then(function(paymentInfo){
//        return updateWalletBalance(paymentInfo)
//     })

// createOrder(cart)
//     .then(orderId => proceedToPayment(orderId))
//     .then(paymentInfo => showOrderSummary(paymentInfo))
//     .then(paymentInfo => updateWalletBalance(paymentInfo))

//CREATE PROMISE
// function validateCart(cart) {
//     return true;
// }
// function createOrder(cart) {
//     const promise = new Promise(function (resolve, reject) {
//         //createOrder
//         //validateCart
//         //orderId
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }
//         //logic for createOrder
//         const orderId = "12345"
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000)

//         }
//     })
//     return promise;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function (resolve, reject) {
//         resolve("Payment Successfull")
//     })
// }

// const promise = createOrder(cart);
// promise
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId;
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     })
//     .then(function (orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo) {
//         console.log(paymentInfo);

//     })
//     .catch(function (err) {
//         console.log(err.message);
//     })
//     .then(function(orderId){
//         console.log("No matter what happens, I will definietely be called")
//     })

//EXERCISE
//createOrder
//proceedToPayment
//showOrderSummary
//updateWallet

// const cart = ["shoes", "pants", "shirts"]
// const createOrder = (cart) => {
//     return new Promise((resolve, reject) => {
//         const orderId = "12345"
//         if (cart && cart.length > 0) {
//             //create an order
//             resolve(orderId);
//         }
//         else {
//             const err = new Error("order create failure")
//             reject(err)
//         }

//     });
// }
// const proceedToPayment = (orderId) => {
//     return new Promise((resolve, reject) => {
//         const payment = true;
//         if (orderId) {
//             //proceedTo Payment
//             resolve({ payment, orderId })
//         }
//         else {
//             const err = new Error("paymant failed")
//             reject(err)
//         }


//     });
// }

// const showOrderSummary = (orderId, payment) => {
//     return new Promise((resolve, reject) => {
//         if (payment) {
//             return resolve({ summary: `Here is your Order Summary of ${orderId}`, payment });
//         }
//         else {
//             const err = new Error("Something went wrong")
//             reject(err)
//         }


//     })
// }

// const updateWallet = (payment) => {
//     return new Promise((resolve, reject) => {
//         if (payment) {
//             resolve("Wallet Updated. Your New Balance is: $100")
//         }
//         const err = new Error("Something went wrong")
//         reject(err)

//     })

// }

// createOrder(cart)
//     .then((orderId) => {
//         console.log("Order ID:", orderId);
//         return proceedToPayment(orderId);
//     })
//     .then(({ orderId, payment }) => {
//         return showOrderSummary(orderId, payment);
//     })
//     .then(({ summary, payment }) => {
//         console.log(summary);
//         return updateWallet(payment);
//     })
//     .then((walletStatus) => {
//         console.log(walletStatus);
//     })
//     .catch((err) => {
//         console.log("Error", err);
//     })

//Promise APIs
// const p1 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("P1 Success")
//     // }, 3000)
//     setTimeout(() => {
//         reject("P1 Failed")
//     }, 3000)
// });
// const p2 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("P2 Success")
//     // }, 5000)
//     setTimeout(() => {
//         reject("P2 Failed")
//     }, 1000)
// });
// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("P3 Success")
//     // }, 2000)
//     setTimeout(() => {
//         reject("P3 Failed")
//     }, 2000)
// })

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res);

// }).catch((err) => {
//     console.error(err);
// })

// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res);

// }).catch((err) => {
//     console.error(err);
// })

// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res);

// }).catch((err) => {
//     console.error(err);
// })

// Promise.any([p1, p2, p3]).then(res => {
//     console.log(res);

// }).catch((err) => {
//     console.error(err);
//     console.log(err.errors)
// })

// Async Function
// const getData = async()=>{
//    return "Hello World!"
// }

// const getData = ()=>{
//     return new Promise((resolve, reject) => {
//         resolve("Success");
//     })
// }
// const res = getData();
// res.then((res)=>console.log(res))


// handling promises with Async/await combo vs normally with .then
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!")
//     }, 10000)

// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!")
//     }, 5000)

// })
// const getData = () => {
//     //JS Engine will not wait for promise to be resoloved
//     p.then((res) => console.log(res))

//     console.log("Hello JS");
// }

// const handlePromise = async () => {
//     console.log("Hello Wolrd");

//     //JS Engine was waiting for promise to resolved
//     const val = await p1;
//     console.log("Hello JS");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Hello JS 2");
//     console.log(val2);
// }
// // getData()
// handlePromise();


//Real World Examples
// const API_URL = "https://api.github.com/users/Kashaf-Ansari-3108"

// const handlePromise = async () => {
//     try {
//         const responseObj = await fetch(API_URL);
//         const jsonValue = await responseObj.json();
//         console.log(jsonValue);
//     } catch (err) {
//         console.log(err);

//     }
//     //fetch() => Response.json()=> jsonValue
// }
// handlePromise()

// "this" keyword

// "use strict";

// //this in global space
// console.log("Global Space", this);  //globalObject


// // this inside a function depends on strict and non-strict mode
// function x() {
//     return this;
// }
// console.log("Inside Function x()", x());



// // this in strict mode - (this substitiution)

// // this value in depends on how this is called (window)
// console.log("Inside Function window.x();", window.x());


// // this inside a object's method
// const obj = {
//     a: 10,
//     x: function () {
//         console.log(this);
//     }
// }
// obj.x();

// // call apply bind methods (sharing methods)
// const student1 = {
//     name: "Harry",
//     printName: function () {
//         console.log(this.name);
//     }
// }
// student1.printName();
// const student2 = {
//     name: "Hermione"
// }
// student1.printName.call(student2)

// // this inside arrow function
// const obj2 = {
//     a: 10,
//     x: () => {
//         console.log("Arrow function", this);

//     }
// }
// obj2.x()

// //this inside nested arrow function
// const obj3 = {
//     a: 10,
//     x: function(){
//         const y=()=>{
//             console.log("inside nested arrow function", this);

//         }
//         y();
//     }
// }
// obj3.x()

// // this inside DOM

// call apply and bind methods (sharing methods)

// let name = {
//     firstName: "Kashaf",
//     lastName: "Ansari",
//     // printFullName: function (){
//     //     console.log(this.firstName+" "+this.lastName);
//     // }
// }
// const printFullName = function (homeTown, state) {
//     console.log(this.firstName + " " + this.lastName +" from " + homeTown + " "+ state);
// }


// let name2 = {
//     firstName: "Niaz",
//     lastName: "Ahmed",
// }

// //function borrowing 
// //call method
// printFullName.call(name, "Karachi", "Pakistan");
// printFullName.call(name2,  "Karachi", "Pakistan");

// //apply method
// printFullName.apply(name, ["Karachi", "Pakistan"]);
// printFullName.apply(name2, ["Karachi", "Pakistan"]);

// //bind method
// let printMyName = printFullName.bind(name, "Karachi", "Pakistan")
// console.log(printMyName);
// printMyName()

let counter = 0
const getData = () => {
    //calls an API and gets data
    console.log("Fetching Data..", counter++)
}

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

const throttle = function (fn, limit) {
    let flag = true;
    return function () {
        if(flag){
            fn();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit); 
        }
       
       
    }
}
// const betterFunction = debounce(getData, 300)
const betterFunction = throttle(getData, 300);





