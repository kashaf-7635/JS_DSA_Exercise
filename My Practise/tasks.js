//Task 1 and Task 3
// const createCounter = () => {
//    let counter = 0;
//     return {
//         increment: () => {
//             counter++;

//         },
//         decrement: () => {
//             counter--;

//         },
//         getCount: () => {
//             return counter;
//         }
//     }
// }

// const counter1 = createCounter();
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// console.log(counter1.getCount());

// const counter2 = createCounter();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// console.log(counter2.getCount());

//Task 2
// const createBankAccount = ()=>{
//     let balance = 100;
//     return {
//         deposit:(amount)=>{
//          if(amount > 0){
//             balance += amount;
//          }
//         },
//         withdraw:(amount)=>{
//             if(amount > 0 && amount <= balance){
//                 balance -= amount;
//             }
//         },
//         getBalance:()=>{
//             return balance;
//         }
//     }
// }
// const bankAcc = createBankAccount()
// console.log(bankAcc.getBalance());
// bankAcc.deposit(100);
// console.log(bankAcc.getBalance());
// bankAcc.withdraw(50);
// console.log(bankAcc.getBalance());

//Task 4
// const delayedGreeting = (name) => {
//     return () => {
//         setTimeout(() => {
//             console.log("Hello " + name);
//         }, 2000)

//     }
// }
// const greet = delayedGreeting("Kashaf")();

// Task 5
// const input = { a: 1, b: { c: 2, d: { e: 3 } } };

// const deepCloneNested = (input) => {
//     if (typeof input !== 'object' || input === null) {
//         return input;
//     }

//     if (Array.isArray(input)) {
//         return input.map(item => deepCloneNested(item))
//     }

//     const clone = {}
//     for (const key in input) {
//         if (input.hasOwnProperty(key)) {
//             clone[key] = deepCloneNested(input[key]);
//         }
//     }
//     return clone;

// }

// console.log(deepCloneNested(input));

// const input = [1,[2,[3,[4,[5,[6]]]]]]
// const input ={
//     name:"kashaf",
//     loginInfo:{
//         email:"kashaf.ansari@metafroliclabs.com",
//         pwd:"1234"
//     }

// }
// const deepClone = (input) => {
//    if(typeof input !== 'object' || input === null  ){
//     return input;
//    }

//    if(Array.isArray(input)){
//     return input.map(item => deepClone(item))
//    }

//    const clone = {};
//    for(const key in input){
//     if(input.hasOwnProperty(key)){
//         clone[key] = deepClone(input[key]);
//     }
//    }
//    return clone;

// }

// const output = deepClone(input);
// console.log(input);
// console.log(output);

//Task 5
// const obj = { name: "Kashaf" }

// function sayHi(age) {
//     return `${this.name} is ${age} years old`
// }

// const bound = sayHi.bind(obj);
// console.log(bound(22));

// const customBind = (fn, obj) => {
//     return function (...args) {
//        return fn.call(obj, args);
//     }
// }

// const bound = customBind(sayHi, obj);
// console.log(bound(22));

//Task 6 Custom Promise APIs :)))
// const promise1 = () => {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         //     resolve("Promise 1 resolved")
//         // }, 1000);
//         setTimeout(() => {
//             reject("Promise 1 rejected")
//         }, 1000);
//     })
// }
// const promise2 = () => {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         //     resolve("Promise 2 resolved")
//         // }, 2000);
//         setTimeout(() => {
//             reject("Promise 2 rejected")
//         }, 2000);
//     })
// }
// const promise3 = () => {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         //     resolve("Promise 3 resolved")
//         // }, 3000);
//         setTimeout(() => {
//             reject("Promise 3 rejected")
//         }, 3000);
//     })
// }

// const customPromiseAll = (promises) => {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let completed = 0;

//         promises.forEach((promise, index) => {
//             promise()
//                 .then((res) => {
//                   results[index] = res;
//                   completed++;
//                   if(completed == promises.length){
//                     resolve(results);
//                   }
//                 })
//                 .catch((err) => {
//                     reject(err);
//                 })

//         })

//     })
// }

// customPromiseAll([promise1, promise2, promise3])
//     .then(results => console.log(results))
//     .catch(error => console.error(error));

// const customPromiseAllSettled = (promises) => {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let settled = 0;

//         promises.forEach((promise, index) => {
//             try {
//                 promise()
//                     .then((res) => {
//                         results[index] = res;
//                         settled++;
//                         if (settled === promises.length) {
//                             resolve(results)
//                         }
//                     })
//                     .catch((err) => {
//                         results[index] = err;
//                         settled++;
//                         if (settled === promises.length) {
//                             resolve(results)
//                         }
//                     })

//             }
//             catch (err) {
//                 reject(err)
//                 console.error(err)
//             }
//         })
//     })
// }

// customPromiseAllSettled([promise1, promise2, promise3])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// const customPromiseRace = (promises) => {
//    return new Promise((resolve, reject)=>{
//     promises.forEach((promise)=>{
//          promise()
//          .then((res)=>{
//             resolve(res)
//          })
//          .catch((err)=>{
//             reject(err)
//          })
//     })
//    })
// }

// customPromiseRace([promise1, promise2, promise3])
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// const customPromiseAny = (promises) => {
//     return new Promise((resolve, reject) => {
//         let firstResolved = false;
//         let settled = 0;
//         let aggrError = [];
//         promises.forEach((promise, index) => {
//             promise()
//                 .then((res) => {
//                     firstResolved = true;
//                     if (firstResolved) {
//                         resolve(res);
//                     }
//                 })
//                 .catch((err) => {
//                     aggrError[index] = err;
//                     settled++;
//                     if (settled === promises.length) {
//                         reject({ error: aggrError })
//                     }

//                 })
//         })
//     })
// }

// customPromiseAny([promise1, promise2, promise3])
//     .then(res => console.log(res))
//     .catch((err) => {
//         if (err.error) {
//             console.log(err)
//         }
//         else {
//             console.log(err);
//         }

//     })

//Task 7
// const input = [1, [2, [3, [4]], 5]];
// const flatten = (input) => {
//     let result = [];

//     for (let i = 0; i < input.length; i++) {
//         if (Array.isArray(input[i])) {
//             // result = [...result, ...flatten(input[i])];
//             result.push(...flatten(input[i]))
//         }
//         else {
//         //   result = [...result, input[i]];
//           result.push(input[i])
//         }
//     }
//     return result;
// }
// console.log(flatten(input));

// var romanToInt = function (s) {
//     const symbolMap = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//     let num = 0;
//     let i = 0
//     while (i < s.length) {
//         let dig1 = symbolMap[s[i]] ? symbolMap[s[i]] : 0
//         let dig2 = symbolMap[s[i + 1]] ? symbolMap[s[i + 1]] : 0

//         if (dig1 < dig2) {
//             num += dig2 - dig1
//             i += 2;
//         } else {
//             num += dig1;
//             i++;
//         }
//         // console.log('', num, i);
//     }
//     return num;

// };
// romanToInt("III")

// function longestCommonPrefix(strs) {
//     let prefix = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         while (!strs[i].startsWith(prefix)) {
//          prefix = prefix.slice(0, -1)
//             if(prefix === ""){
//                 return "Noting";
//             }
//         }

//     }
//     return prefix;
// }

// let strs = ["dog","racecar","car"]

// console.log("output",longestCommonPrefix(strs));

// var isValid = function (s) {
//     let brackets = [["(", ")"], ["{", "}"], ["[", "]"]]
//     let arr = [];
//     let flag = false;
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < brackets.length; j++) {
//             if (s[i] === brackets[j][0]) {
//                 arr.push(s[i])
//             }
//             if (s[i] === brackets[j][1]) {
//                 if (arr[arr.length - 1] === brackets[j][0]) {
//                     flag = true;
//                     arr.pop();
//                 } else {
//                     return false
//                 }
//             }
//         }
//         console.log(arr,i);
//     }

//     if(arr.length !== 0){
//         flag = false;
//     }

//     return flag;
// };

// let s = "([]){"
// console.log(isValid(s));

// Linked List with only head pointer

// const createNode = (value) => {
//     let val = value;
//     let next = null;
//     return { val, next }
// }
// const createLinkedList = () => {
//     let head = null;
//     let size = 0;

//     return {
//         isEmpty: () => {
//             return size === 0;
//         },
//         getSize: () => {
//             return size;
//         },

//         // O(1)
//         prepend: function (value) {
//             const node = createNode(value);
//             if (this.isEmpty()) {
//                 head = node;
//             } else {
//                 node.next = head;
//                 head = node;
//             }
//             size++;
//         },

//         // O(n)
//         append: function (value) {
//             const node = createNode(value);
//             if (this.isEmpty()) {
//                 head = node;
//             } else {
//                 let curr = head;
//                 while (curr.next) {
//                     curr = curr.next;
//                 }
//                 curr.next = node;
//             }
//             size++;

//         },

//         insert: function (value, index) {
//             if (index < 0 || index > size) {
//                 console.log("Invalid Index");
//             }
//             if (index === 0) {
//                 this.prepend(value);
//             }
//             if (index > 0) {
//                 const node = createNode(value);
//                 let curr = head;

//                 for (let i = 0; i < index - 1; i++) {
//                     curr = curr.next;
//                 }
//                 node.next = curr.next;
//                 curr.next = node;
//                 size++;
//             }

//         },

//         removeFrom: function (index) {
//             if (index < 0 || index >= size) {
//                 return null;
//             }
//             let item;
//             if (index === 0) {
//                 item = head;
//                 head = head.next;
//             }
//             if (index > 0) {
//                 let prev = head;

//                 for (let i = 0; i < index - 1; i++) {
//                     prev = prev.next;
//                 }
//                 item = prev.next;
//                 prev.next = item.next;
//             }
//             size--;
//             return item.value;

//         },
//         removeFromValue: function (value) {
//             if (this.isEmpty()) {
//                 return null
//             }
//             let item;
//             if (head.val === value) {
//                 item = head;
//                 head = head.next;
//                 size--;
//                 return item.val;
//             } else {
//                 let prev = head;

//                 while (prev.next && prev.next.val !== value) {
//                     prev = prev.next;
//                 }
//                 if (prev.next) {
//                     item = prev.next;
//                     prev.next = item.next;
//                     size--;
//                     return value;
//                 }
//                 return null;

//             }

//         },
//         search: function (value) {
//             if (this.isEmpty()) {
//                 return -1;
//             } else {
//                 let curr = head;
//                 let i = 0;
//                 while (curr) {
//                     if (curr.val === value) {
//                         return `${value} found at index ${i}`
//                     }
//                     curr = curr.next;
//                     i++;
//                 }
//                 return -1;

//             }

//         },
//         reverse: function () {
//             let prev = null;
//             let curr = head;

//             while (curr) {
//                 let next = curr.next;
//                 curr.next = prev;
//                 prev = curr;
//                 curr = next;
//             }
//             head = prev;
//         },

//         print: function () {
//             if (this.isEmpty()) {
//                 console.log("List is Empty");
//             } else {
//                 let curr = head;
//                 let listValues = "";
//                 while (curr) {
//                     listValues += `${curr.val} `;
//                     curr = curr.next;
//                 }
//                 console.log(listValues);

//             }

//         },
//         getHead: () => {
//             return head;
//         }
//     }
// }

// const list1 = createLinkedList();
// list1.append(1);
// list1.append(1);
// list1.append(2);

// const list2 = createLinkedList();
// list2.append(1);
// list2.append(3);
// list2.append(4);

// var mergeTwoLists = function(list1, list2) {
//     const node = { val: -1, next: null };
//     let tail = node;

//   while (list1 && list2) {
//     if (list1.val <= list2.val) {
//       tail.next = list1;
//       list1 = list1.next;
//     } else {
//       tail.next = list2;
//       list2 = list2.next;
//     }
//     tail = tail.next;
//   }

//   // Attach the rest of the remaining list
//   tail.next = list1 || list2;

//   return node.next;
// };

// var mergeTwoLists = function (list1, list2) {
//     let dummy = { val: -1, next: null }
//     let curr = dummy;

//     while (list1 && list2) {
//         if (list1.val <= list2.val) {
//             console.log('if',curr.val, list1.val, list2.val);

//             curr.next = list1;
//             list1 = list1.next;

//         } else {
//             console.log('else',curr.val, list1.val, list2.val);
//             curr.next = list2;
//             list2 = list2.next;

//         }
//        curr = curr.next;
//     }

//    curr.next = list1 || list2;
//   return dummy.next;
// };

// console.log(mergeTwoLists(list1.getHead(), list2.getHead()));

// var removeDuplicates = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//          nums.splice(i, 1)
//             i--;
//         }

//     }
//     console.log(nums);

//     return nums.length;

// };

// console.log(removeDuplicates([1, 1, 1, 2, 3, 3]));

// var removeElement = function(nums, val) {
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] === val){
//             nums.splice(i, 1);
//             i--
//         }
//     }

//     return nums.length;
// };

// removeElement([1,2,4,2,2], 2)

// var strStr = function(haystack, needle) {
//    return haystack.indexOf(needle)
// };

// let haystack = "sadbutsad", needle = "sad"
// strStr(haystack, needle);

// var searchInsert = function (nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     let mid = Math.floor((start + end) / 2);
//     let pos = 0;

//     while (start <= end) {
//         if (nums[mid] === target) {
//             return mid;
//         }
//         else {
//             if (target > nums[mid]) {
//                 start = mid + 1;
//                 pos = start;

//             } else {
//                 end = mid - 1;
//                 pos = start;

//             }
//             mid = Math.floor((start + end) / 2);
//         }
//     }
//     return pos;
// };

// let nums = [1, 3, 5, 6], target = 4
// console.log(searchInsert(nums, target));

// var lengthOfLastWord = function (s) {
//     const wordsArray = s.split(" ").filter(item => item !== "");
//     return wordsArray[wordsArray.length - 1].length;
// };
// let s = "   fly me   to   the moon  "
// console.log(lengthOfLastWord(s));

// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         }
//         digits[i] = 0;
//     }
//     digits.unshift(1);
//     return digits;
// };

// let digits = [1, 2, 3]
// console.log(plusOne(digits));

// function add(num1, num2, carry) {
//     let total = Number(num1) + Number(num2) + Number(carry);
//     return {
//         sum: String(total % 2),
//         carry: String(Math.floor(total / 2))
//     };
// }

// var addBinary = function (a, b) {
//     let i = a.length - 1;
//     let j = b.length - 1;
//     let carry = "0";
//     let result = "";

//     while (i >= 0 || j >= 0) {
//         let num1 = i >= 0 ? a[i] : "0";
//         let num2 = j >= 0 ? b[j] : "0";

//         let ans = add(num1, num2, carry);
//         result = ans.sum + result;
//         carry = ans.carry;

//         i--;
//         j--;
//     }

//     if (carry === "1") {
//         result = carry + result;
//     }

//     return result;
// };

// let a = "11", b = "1";
// console.log(addBinary(a, b));

// var mySqrt = function (x) {
//     if (x === 0) return 0;
//     if (x >= 0) {
//         for (let i = 1; i <= x; i++) {
//             let ans = i * i;
//             if (ans === x) {
//                 return i;
//             }
//             else if (ans > x) {
//                 return i - 1;
//             }
//         }
//     }
// };

// console.log(mySqrt(9));

// const climbingStaircase = (n) => {
//     const noOfWays = [1, 2]
//     for (let i = 2; i <= n; i++) {
//         noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
//     }

//     return noOfWays[n - 1];

// }
// console.log(climbingStaircase(1));

// var deleteDuplicates = function(head) {
//     let prev = null;
//     let curr = head;

//     while (curr && curr.next) {
//         if (curr.val === curr.next.val) {
//             if (curr === head) {
//                 head = head.next;
//                 curr = curr.next;
//             } else {
//                 prev.next = curr.next;
//                 curr = curr.next;
//             }
//         } else {
//             prev = curr;
//             curr = curr.next;
//         }
//     }

//     return head;
// };

// console.log(deleteDuplicates(list1.getHead()));

// var merge = function (nums1, m, nums2, n) {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;
//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {

//             nums1[k--] = nums1[i--];
//         } else {
//             nums1[k--] = nums2[j--];
//         }
//     }

//     while (j >= 0) {
//         nums1[k--] = nums2[j--];
//     }

//     console.log(nums1, nums2);

// };
// let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// merge(nums1, m, nums2, n)

// var maxProfit = function (prices) {
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for (let price of prices) {
//         if (price < minPrice) {
//             minPrice = price;
//         } else if (price - minPrice > maxProfit) {
//             maxProfit = price - minPrice;
//         }
//     }

//     return maxProfit;

// };
// let prices = [7, 1, 5, 3, 6, 4]
// console.log(maxProfit(prices));

// var isPalindrome = function (s) {

//     let letters = s.match(/[a-zA-Z0-9]/g) || []
//     let reverseStr = ""
//     for (let i = letters.length - 1; i >= 0; i--) {
//         reverseStr += letters[i];
//     }

//     return letters.join("").toLowerCase() === reverseStr.toLowerCase()

// };

// let s = "."
// console.log(isPalindrome(s));

// var isHappy = function (n) {
//     let seen = new Set()

//     while (n !== 1 && !seen.has(n)) {
//         seen.add(n)
//         n = n.toString().split("").reduce((acc, curr) => {
//            return acc += parseInt(curr) * parseInt(curr)
//         }, 0)
//     }

//    return n === 1;

// };

// console.log(isHappy(2));

// var singleNumber = function(nums) {
//     let arr = nums.sort()

//     for(let i=0; i<arr.length; i += 2){
//      if(arr[i] !== arr[i+1]){
//         return arr[i];
//      }
//     }
// };

// console.log(singleNumber([2,2,1,1,3,4,3,4,6]));

// var num = 278;
// var digits = [];
// while (num != 0) {
//     digits.push(num % 10);
//     num = Math.trunc(num / 10);
// }
// digits.reverse();
// console.log(digits);

// var convertToTitle = function (columnNumber) {
//     let result = '';
//     while (columnNumber > 0) {
//         columnNumber--;
//        let remainder = columnNumber % 26;
//         result = String.fromCharCode(65 + remainder) + result;
//         columnNumber = Math.floor(columnNumber / 26);
//     }
//     return result;

// };
// console.log(convertToTitle(27));

// var majorityElement = function (nums) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             map.set(nums[i], map.get(nums[i]) + 1)
//         } else {
//             map.set(nums[i], 1)
//         }
//     }
//     return map.entries().reduce((acc, curr) => {
//         if (curr[1] > nums.length / 2) {
//             acc = curr[0];
//         }
//         return acc;
//     }, 0)

// };
// const nums = [2,2,1,1,1,2,2]
// console.log(majorityElement(nums));

// var titleToNumber = function (columnTitle) {

//     function findAsscii(char) {
//         return (char.charCodeAt() + 1) - 65;
//     }

//     let result = 0;
//     let len = columnTitle.length - 1;
//     for (let i = 0; i < columnTitle.length; i++) {
//         result += findAsscii(columnTitle[i]) * Math.pow(26, len)
//         len--;
//     }

//     return result;

// };
// console.log(titleToNumber("FXSHRXW"));

// var generate = function (numRows) {
//     let pascalsTriangle = []
//     for (let i = 1; i <= numRows; i++) {
//         let row = [];
//         for (let j = 1; j <= i; j++) {
//             if (j === 1 || j === i) {
//                 row.push(1);
//             }
//             else {
//                 row.push(pascalsTriangle[i - 2][j - 2] + pascalsTriangle[i - 2][j - 1])
//             }

//         }
//         pascalsTriangle.push(row);
//     }
//     return pascalsTriangle;

// };

// console.log(generate(5));

// var getRow = function (rowIndex) {
//     let pascalsTriangle = []
//     for (let i = 0; i <= rowIndex; i++) {

//         let row = [];
//         for (let j = 0; j <= i; j++) {

//             if (j === 0 || j === i) {
//                 row.push(1);
//             }
//             else {
//                 row.push((pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j]))
//             }

//         }
//         pascalsTriangle.push(row);
//     }
//     return pascalsTriangle[pascalsTriangle.length - 1];
// };

// console.log(getRow(3));

// var isIsomorphic = function (s, t) {
//     if (s.length !== t.length) return false;

//     let mapST = new Map();
//     let mapTS = new Map();

//     for (let i = 0; i < s.length; i++) {
//         if ((mapST.has(s[i]) && mapST.get(s[i]) !== t[i]) ||
//             (mapTS.has(t[i]) && mapTS.get(t[i]) !== s[i])) {
//             return false;
//         }
//         mapST.set(s[i], t[i]);
//         mapTS.set(t[i], s[i]);
//     }

//     return true;
// };

// let s = "paper", t = "title"
// console.log(isIsomorphic(s, t));

// var summaryRanges = function (nums) {
//     let arr = []
//     let start = nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if (i === nums.length - 1 || nums[i + 1] - nums[i] > 1) {
//             if (start !== nums[i]) {
//                 arr.push(`${start}->${nums[i]}`)

//             } else {
//                 arr.push(`${nums[i]}`)
//             }
//             start = nums[i + 1];
//         }

//     }
//     return arr;
// };
// let nums = [0, 2, 3, 4, 6, 8, 9]
// console.log(summaryRanges(nums));

// var isPowerOfTwo = function (n) {
//     if (n < 1) return false;

//     while (n > 1) {
//         if (n % 2 !== 0) return false;
//         n = n / 2;
//     }

//     return true;
// };
// console.log(isPowerOfTwo(7));

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;
//     let sArr = [];
//     let tArr = [];
//     for(let i in s){
//         sArr.push(s[i])
//         tArr.push(t[i])
//     }
//     return sArr.sort().toString() === tArr.sort().toString();

// };
// let s = "rat", t = "car"
// console.log(isAnagram(s, t));

// var addDigits = function (num) {
//   let str = num.toString();

//   if (str.length === 1) return parseInt(str);

//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
//   }
//   return addDigits(sum);
// };

// let num = 38;
// console.log(addDigits(num));

// var isUgly = function (n) {
//   if (n <= 0) return false;
//   while (n % 2 === 0) n /= 2;
//   while (n % 3 === 0) n /= 3;
//   while (n % 5 === 0) n /= 5;
//   return n === 1;
// };

// const n = 6;
// console.log(isUgly(n));

// var missingNumber = function (nums) {
//   nums.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(nums);

//     for (let i = 0; i <= nums.length; i++) {
//       if (i !== nums[i]) {
//         return i;
//       }
//     }
// };
// const nums = [
//   45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
//   4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
//   25, 47, 0, 31, 42, 24, 10, 14,
// ];
// console.log(missingNumber(nums));

// const isBadVersion = (num) => {
//   if (num > 3) return true;
//   else return false;
// };

// let solution = (n) => {
//   let start = 1;
//   let end = n;
//   let mid = Math.floor((start + end) / 2);

//   while (start < end) {
//     console.log(start, end, mid);

//     if (!isBadVersion(mid)) {
//       start = mid + 1;
//     } else {
//       end = mid;
//     }

//     mid = Math.floor((start + end) / 2);
//   }

//   return mid;
// };

// const digit = 5;
// console.log(solution(digit));

// var moveZeroes = function (nums) {
//   let pos = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       if (pos !== i) {
//         nums[pos] = nums[i];
//         nums[i] = 0;
//       }
//       pos++;
//     }
//   }

//   return nums;
// };

// const nums = [0,0,1];
// console.log(moveZeroes(nums));

// var wordPattern = function (pattern, s) {
//   let arr = s.split(" ");
//   if (arr.length !== pattern.length) return false;

//   const mapP = new Map();
//   const mapS = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       (mapP.has(pattern[i]) && mapP.get(pattern[i]) !== arr[i]) ||
//       (mapS.has(arr[i]) && mapS.get(arr[i]) !== pattern[i])
//     ) {
//       return false;
//     } else {
//       mapP.set(pattern[i], arr[i]);
//       mapS.set(arr[i], pattern[i]);
//     }
//   }
//   return true;
// };

// let pattern = "aaaa",
//   s = "dog dog dog dog";
// console.log(wordPattern(pattern, s));

var canWinNim = function (n) {
  if (n <= 3) {
    return true;
  }
  if (n % 4 === 0) {
    return false;
  }
  return canWinNim(n/4);
};
console.log(canWinNim(12));
