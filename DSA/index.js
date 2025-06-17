// console.log("Hello DSA");

//Big-O Notation

// Time Complexity

// sum of natural numbers up to n 
// O(n) - linear
// const summation = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++ ) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(summation(4));

// O(1) - Constant
// const summation = (n) => {
//     return (n * (n + 1)) / 2;
// }

// console.log(summation(4));

// O(n^2) - Quadratic
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//   // Some code
//     }
// }

// O(n^3) - Cubic
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         for (let k = 1; k <= j; k++) {
//             // Some code
//         }
//     }
// }

//  //Objects - Big-O
// const person = {
//     firstName: "Kashaf",
//     lastName: "Ansari",
// }

// //Insert - O(1)
// person.age = 22;
// console.log(person);

// //Remove - O(1)
// delete person.age;
// console.log(person);

// //Access - O(1)
// console.log(person.firstName);

// // Search - O(n) Linear
// console.log(Object.keys(person).includes("age"));


// //Object Methods

// //Object.keys() - O(n)
// console.log(Object.keys(person));

// //Object.values() - O(n)
// console.log(Object.values(person));

// //Object.entries() - O(n)
// console.log(Object.entries(person));


// Array - Big-O
const odd = [1, 3, 5, 7, 9]
const even = [2, 4, 6, 8, 10]

// Insert/Remove at End - O(1)
// odd[odd.length - 1] = 11
// odd.length = odd.length - 1;

// Insert/Remove at Beginning - O(n)
// Remove
// odd[0] = odd[0+1]
// odd[1] = odd[1+1]
// odd[2] = odd[2+1]
// odd[3] = odd[3+1]

// for (let i = 0; i < odd.length - 1; i++) {
//     odd[i] = odd[i + 1];
// }
// odd.length = odd.length - 1;

// //Insert
// let item = 1;
// // odd[3 + 1] = odd[3]
// // odd[2 + 1] = odd[2]
// // odd[1 + 1] = odd[1]
// // odd[0 + 1] = odd[0]

// for (let i = odd.length - 1; i >= 0; i--) {
//     odd[i + 1] = odd[i];
// }
// odd[0] = item;


//Access - O(1)
// console.log(odd[0]);

// Search - O(n)
// let item = 9;

// const search = () => {
//     let loc = null;
//     for (let i = 0; i < odd.length; i++) {
//         if (item === odd[i]) {
//             loc = i;
//         }
//     }
//     return loc;
// }

// console.log(search());

// Array Methods

// push/pop O(1)
// odd.push(11); // insert at end
// odd.pop(11); // remove from end

// // shift/unshift/concat/slice/splice
// odd.shift() // remove from beginning
// odd.unshift(1) //Insert one more elements to the beginning
// console.log(odd.concat(even));  // merge two or more arrays

// // copying some elements from original array to new array
// console.log("From 0 index to 3-1=2 index",odd.slice(0,3));
// console.log("omit end (2 to last index)",odd.slice(2));
// console.log("Negative indices (From end to 2-1=1 index)", odd.slice(-2));

// console.log(odd.splice(2, 2)); // Remove two elements from index 2 and returns removed items
// odd.splice(2, 0, 5, 7)
// console.log(odd)

// for iteration return undefined
// console.log(odd.forEach((ele, i, arr)=>{
//     console.log(arr);
// }));


// MATHS ALGORITHMS

// Fibonacci Sequence

// let arr = [];
// arr[0] = 0
// arr[1] = 1;

// arr[2] = arr[2-1] + arr[2-2];
// arr[3] = arr[3-1] + arr[3-2];
// arr[4] = arr[4-1] + arr[4-2];

// console.log(arr);

// O(n) Linear 
// const fibonacci = (n) => {
//     let arr = [0,1];
//
//     if (n === 2) return arr;

//    for (let i = 2; i < n; i++) {
//         arr[i] = arr[i-1] + arr[i-2];
//     }
//     return arr;
// }
// console.log(fibonacci(7));

// Factorial of a Number
// O(n) - Linear
// const factorial = (n) => {
//     let product = 1;
//     if(n === 0) return product;
//     for (let i = n; i > 0; i--) {
//        product *= i; 
//     }
//     return product;
// }
// console.log(factorial(5));

// Prime Number
// O(n) - Linear
// const isPrime = (num) => {
//     if (num < 2) return false;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true;

// }

// Optimizes Primality Test
// O (sqrt(n))
// const isPrime = (num) => {
//     if (num < 2) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (num % i === 0) return false
//     }
//     return true;

// }

// console.log(isPrime(24));

// PowerOfTwo 

// O(n)
// const isPowerOfTwo = (n) => {
//   if(n < 1) return false;
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//         if (Math.pow(2, i) === n) return true;
//     }
//     return false;
// }

// O (log n)
// const isPowerOfTwo = (n) => {
//     if(n < 1) return false;

//     while(n > 1){
//         if(n % 2 !== 0) return false;
//         n = n/2;
//     }
//     return true;

// }
// console.log(isPowerOfTwo(5)); 

// const isPowerOTwoBitWise = (n) =>{
//     if(n < 1) return false;
//     return (n & (n-1)) == 0;
// }
// console.log(isPowerOfTwoBitWise(3));

// Recursion

// Recursive Fibonacci Sequence
// O (2^n)
// const recursiveFibonacci = (n) => {
//     if (n < 2) return n;
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }
// console.log(recursiveFibonacci(6));


// Recursive Factorial 
// O(n)
// const recursiveFactorial = (n) => {
//     if (n === 0) return 1;
//     return n * recursiveFactorial(n - 1);
// }
// console.log(recursiveFactorial(3));

// SEARCH ALGORITHM

// const arr = [-5, 2, 4, 6, 10]
// const t = 6

// Linear Search
// Big-O = O(n)
// const linearSearch = (arr, t) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === t) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch(arr, t));


// Binary Search
// O(log n)
// const binarySearch = (arr, t) => {
//     if (arr.length === 0) return -1;
//     let start = 0
//     let end = arr.length - 1;
//     let mid = Math.floor((start + end) / 2);

//     while (start <= end) {
//         if (arr[mid] === t) {
//             return mid;
//         }
//         else {
//             if (t > arr[mid]) {
//                 start = mid + 1;
//             }
//             else {
//                 end = mid - 1;
//             }
//             mid = Math.floor((start + end) / 2)
//         }
//     }

//     return -1;
// }

// console.log(binarySearch(arr, t));

// Recursive Binary Search
// Big-O = O(n)
// const recursiveBinarySearch = (arr, t)=>{
//     return search(arr, t, 0, arr.length - 1)
// }

// const search = (arr, t, start, end) => {
//     if (start > end) return -1;

//     let mid = Math.round((start + end) / 2);
//     if (arr[mid] === t) return mid;

//     if (t > arr[mid]) {
//        return search(arr, t, mid + 1, end);
//     }
//     else {
//        return search(arr, t, start, mid - 1);
//     }
// }
// console.log(recursiveBinarySearch(arr, t));

// SORTING ALGORITHMS
const arr = [8, 20, -2, 4, -6]

// Bubble Sort
// Big-O = O(n^2)
// const bubbleSort = (arr) => {
//     let swapped = false;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped)
// }
// bubbleSort(arr);
// console.log(arr);

// Insertion Sort
// Big-O = O(n^2)
// const insertionSort = () => {
//     for (let i = 1; i < arr.length; i++) {
//         let numberToInsert = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > numberToInsert) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = numberToInsert;
//     }
// }
// insertionSort(arr);
// console.log(arr);

// Quick Sort
// worst case = O(n^2)
// Avg case = O(nlogn)
// const quickSort = (arr) => {
//     if(arr.length < 2) return arr;
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//        if(arr[i] < pivot){
//         left.push(arr[i])
//        }
//        else{
//         right.push(arr[i]);
//        }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];

// }

// console.log(quickSort(arr));

// Merge Sort
//  Big-O = O(nlogn)
// const mergeSort = (arr) =>{
//   if(arr.length < 2) return arr;

//   const mid = Math.floor(arr.length/2);
//   const leftArr = arr.slice(0, mid);
//   const rightArr = arr.slice(mid);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// const merge = (leftArr, rightArr) =>{
//    const sortedArr = []
//    while(leftArr.length && rightArr.length){
//     if(leftArr[0] <= rightArr[0]){
//         sortedArr.push(leftArr.shift())
//     }
//     else{
//         sortedArr.push(rightArr.shift())
//     }
//    }
//    return [...sortedArr, ...leftArr, ...rightArr]
// }
// console.log(mergeSort(arr));

// MISC PROBLEMS

// Cartesian Product
// Big-O = O(m*n)
// const A = [1, 2]
// const B = [3, 4, 5]

// const cartesianProduct = (arr1, arr2) => {
//     let arr = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             arr.push([arr1[i], arr2[j]])
//         }
//     }
//     return arr;
// }

// console.log(cartesianProduct(A, B));

// Climbing Staircase
// Big-O = O(n)
// const climbingStaircase = (n) => {
//     const noOfWays = [1, 2]
//     for (let i = 2; i <= n; i++) {
//         noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
//     }

//     return noOfWays[n - 1];

// }
// console.log(climbingStaircase(1));
// console.log(climbingStaircase(2));
// console.log(climbingStaircase(3));
// console.log(climbingStaircase(4));
// console.log(climbingStaircase(5));


// Tower of Hanoi
// Big-O = O(2^n)
// const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
//     if (n === 1) {
//         console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
//         return;
//     }
//     towerOfHanoi(n - 1, fromRod, usingRod, toRod);
//     console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
//     towerOfHanoi(n - 1, usingRod, toRod, fromRod);
// }

// towerOfHanoi(3, 'A', 'C', 'B');

// Greatest Common Divisor  using Euclidian Algorithm
// function gcd(a, b) {
//     while (b !== 0) {
//       let temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }
// console.log(gcd(48, 18)); 

// Permutations
// Big-O = O(n * n!)
// const getPermutations = (str) => {
//     // Base case: if string length is 1, return it as the only permutation
//     if (str.length === 1) return [str];

//     let permutations = []; // to store all permutations

//     // Loop through each character in the string
//     for (let i = 0; i < str.length; i++) {
//         // Current character
//         let currentChar = str[i];
//         // Remaining characters (excluding currentChar)
//         let remainingChars = str.slice(0, i) + str.slice(i + 1);

//         // Recursive call: get permutations of remaining characters
//         let remainingPermutations = getPermutations(remainingChars);

//         // Add currentChar to the front of each permutation from remainingPermutations
//         for (let perm of remainingPermutations) {
//             permutations.push(currentChar + perm)
//         }
//     }
//     return permutations;
// }
// console.log(getPermutations('abc'));

// Combinations
// Big-O = 
// function getCombinations(str) {
//     let results = [];

//     function backtrack(start, path) {
//         // If path is not empty, it's a valid combination
//         if (path.length > 0) {
//             results.push(path);
//         }

//         // Start from current index to avoid duplicates
//         for (let i = start; i < str.length; i++) {
//             // Include str[i] and move forward
//             backtrack(i + 1, path + str[i]);
//         }
//     }

//     // Start from index 0 with empty path
//     backtrack(0, "");

//     return results;
// }

// console.log(getCombinations("abc"));

// Longest common substring
// Big-O = O(m * n)
// const longestCommonSubstring = (str1, str2) => {
//     const m = str1.length;
//     const n = str2.length;

//     // keep track of the length of the longest common sbstring found so far
//     let maxLength = 0;

//     // stores the ending index of that substring in str1, so can extract it later
//     let endIndex = 0;

//     // Create 2D dynamic programming (DP) table, with (m+1) rows and (n+1) columns
//     const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

//     // We loop through both strings starting from index 1 (because of the padded 0th row/column in the DP table).
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (str1[i - 1] === str2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//                 if (dp[i][j] > maxLength) {
//                     maxLength = dp[i][j];
//                     endIndex = i;
//                 }
//             }
//         }
//     }

//     // Extract the substring from str1
//     const longestSubstring = str1.slice(endIndex - maxLength, endIndex);
//     return { longestSubstring, length: maxLength };
// }
// console.log(
//     longestCommonSubstring("helloworld", "hello"));


// Knapsack Problem
// Big-O = O(n * W)

// function knapsack(weights, values, capacity) {
//     const n = weights.length;
//     const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

//     for (let i = 1; i <= n; i++) {
//         for (let w = 0; w <= capacity; w++) {
//             if (weights[i - 1] <= w) {
//                 // Option 1: include the item
//                 const include = values[i - 1] + dp[i - 1][w - weights[i - 1]];
//                 // Option 2: exclude the item
//                 const exclude = dp[i - 1][w];
//                 // Take the better option
//                 dp[i][w] = Math.max(include, exclude);
//             } else {
//                 // Item too heavy to include
//                 dp[i][w] = dp[i - 1][w];
//             }
//         }
//     }

//     return dp[n][capacity];
// }
// const weights = [2, 3, 4, 5];
// const values = [3, 4, 5, 6];
// const capacity = 5;

// console.log(knapsack(weights, values, capacity));


























