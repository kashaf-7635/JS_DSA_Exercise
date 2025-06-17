// // Sum of Natural Numbers up to n
// // Big-O = O(n)
// const summation = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(summation(5));

// // Another way
// // Big-O = O(1)
// const summation = (n)=>{
//     return (n*(n+1))/2;
// }
// console.log(summation(5));


// // Objects
// const obj = {
//     firstName: "Kashaf",
//     lastName: "Ansari",
//     Height: 5,
//     Weight: 41,
//     dob: '2002-08-31',
//     nationality: "Pakistani",
//     religion: "Islam",
// }

// const countLeapYear = (fromYear, toYear) => {
//     let count = 0;
//     for (let year = fromYear; year <= toYear; year++) {
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             count++;
//         }

//     }
//     return count;
// }


// // Insert 
// // Big-O = O(1)
// obj.age = Math.floor((new Date() - new Date(obj.dob)) /
//     (
//         (
//             (1000 * 60 * 60 * 24) + countLeapYear(new Date(obj.dob).getFullYear(), new Date().getFullYear())
//         ) * 365
//     ))

// // Remove
// // Big-O = O(1)
// delete obj.dob;

// console.log(obj);

// // Access 
// // Big-O = O(1)
// console.log(`${obj.firstName} ${obj.lastName}`);

// // Search
// // Big-O = O(n)
// const search = (value) => {
//     for (let key in obj) {
//         if (key === value) {
//             return key;
//         }
//     }
//     return false;

// }
// const query = search("age")
// console.log(query ? `${query} is ${obj[query]}` : "Not Present");

// //Object Methods
// //Big-O = O(n)
// console.log(Object.keys(obj));

// //Big-O = O(n)
// console.log(Object.values(obj));

// //Big-O = O(n)
// console.log(Object.entries(obj));


// // Arrays
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // Insert/Remove at/from end
// // Big-O = O(1)
// arr[arr.length] = 10
// arr.length = arr.length - 1;


// // Insert/Remove at/from beginning
// // Big-O = O(n)
// const insertAtBeginning = (value) => {
//     for (let i = arr.length; i >= 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = value
// }
// insertAtBeginning(0);


// const deleteFromBeginning = () => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr.length = arr.length - 1;
// }
// deleteFromBeginning();

// // Access
// // Big-O = O(1)
// console.log(arr[5]);



// //Search
// // Big-O = O(n)
// const search = (val) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (val === arr[i]) {
//             console.log(`Found at index ${i}`);
//             return;
//         }

//     }
//     console.log("Not Found");

// }
// search(9);

// // Array Methods
// // Big-O = O(1)
// console.log(arr.push(10));
// console.log(arr.pop());

// // Big-O = O(n)
// console.log(arr.unshift(10));
// console.log(arr.shift());
// console.log(arr.concat([10, 11]));
// console.log(arr.slice(2, 5));
// console.log(arr.splice(0, 1, 0));
// arr.forEach((element, index, array) => console.log(element));
// console.log(arr.map(item => item * 2)
//     .filter(item => item < 10)
//     .reduce((sum, val) => (sum += val), 0));

// console.log(arr);

// Maths Algorithm

// // Fibonacci Series
// // Big-O = O(n)
// const fibinacci = (n) => {
//     const arr = [0, 1]
//     if (n === 1) return [0];
//     if (n === 2) return arr;
//     if (n > 2) {
//         for (let i = 2; i < n; i++) {
//             arr[i] = arr[i - 1] + arr[i - 2];
//         }
//         return arr;
//     }
// }
// console.log(fibinacci(7));

// // Factorial
// // Big-O = O(n)
// const factorial = (n) => {
//     if (n === 0 || n === 1) return 1;
//     let mul = n;
//     for (let i = n - 1; i >= 1; i--) {
//         mul *= i;
//     }
//     return mul;
// }
// console.log(factorial(5));

// // Prime Number
// // Big-O = 
// const isPrime = (num) => {
//     if (num === 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i !== 0) {

//             return `${num} is Prime`
//         }
//     }
//     return `${num} is not Prime`
// }
// console.log(isPrime(8));

// Optimized Primality Test
































