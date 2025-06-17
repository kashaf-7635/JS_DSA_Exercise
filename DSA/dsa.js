// Array 
// push, pop, shift, unshift
// map, filter, reduce, concat, slice and splice 

// const arr = [1, 2, 3, "Kashaf"]
// arr.push(4);
// arr.unshift(0);
// arr.pop();
// arr.shift();

// for(const item of arr){
//     console.log(item);
// }


// Object
// Object.keys(), Object.values(), Object.entries()

// const obj = {
// name: "Kashaf",
// age: 22,
// "key-three": true,
// sayMyName: function () {
//     console.log(this.name);
// }
// }

// obj.hobby = 'gardening',
// obj.age = 22,
// delete obj.hobby

// console.log(obj.name);
// console.log(obj['age']);
// console.log(obj['key-three']);
// console.log(obj);
// obj.sayMyName(); 


// Set 
// const set = new Set([1, 2, 3])
// set.add(4);
// set.add(4);
// console.log(set.has(4));
// set.delete(4);
// set.clear();
// console.log(set.size);


// for (const item of set) {
//     console.log(item);
// }


// Map 
// const map = new Map([['a', 1], ['b', 2], ['c', 3]])
// map.set('c', 3);
// map.delete('c')
// console.log(map.has('a'));
// console.log(map.size);


// for (const [key, value] of map) {
//     console.log(`${key}: ${value}`)
// }

// Stack
// const createStack = () => {
//   let items = [];

//   return {
//     push: element => items.unshift(element),
//     pop:() => items.pop(),
//     isEmpty: () => items.length === 0,
//     peek: () => (items.length > 0 ? items[0] : null),
//     size: () => items.length,
//     print: () => console.log(items.toString())
//   }
// }

// const stack = createStack();
// console.log(stack.isEmpty());

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.size());
// stack.print();

// stack.pop();
// console.log(stack.peek());

// // Queue
// const createQueue = () => {
//     let items = [];

//     return {
//         enqueue: element => items.push(element),
//         dequeue: () => items.shift(),
//         isEmpty: () => items.length === 0,
//         peek: () => (items.length > 0 ? items[0] : null),
//         size: () => items.length,
//         print: () => console.log(items.toString())

//     }
// }

// var queue = createQueue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.size());
// queue.print();

// console.log(queue.dequeue());
// console.log(queue.peek());

// Optimised Queue Implementation
// const createOptimisedQueue = () => {
//     let items = {};
//     let rear = 0;
//     let front = 0;


//     return {
//         enqueue: (element) => {
//             items[rear] = element;
//             rear++;
//         },
//         dequeue: () => {
//             const item = items[front];
//             delete items[front];
//             front++;
//             return item;
//         },
//         isEmpty: () => {
//             return rear - front === 0;
//         },
//         peek: () => {
//             return items[front];
//         },
//         size: () => {
//             return rear - front;
//         },
//         print: () => {
//             console.log(items);
//         }
//     }
// }

// const queue = createOptimisedQueue();

// console.log(queue.isEmpty());

// queue.enqueue("element1");
// queue.enqueue("element2");
// queue.enqueue("element3");

// queue.dequeue();

// console.log(queue.size());
// console.log(queue.peek());
// queue.print();

// Circular Queue
// const createCircularQueue = (cap) => {
//     let items = [];
//     let capacity = cap;
//     let currentLength = 0;
//     let rear = -1;
//     let front = -1;

//     return {
//         isFull: () => {
//             return currentLength === capacity;
//         },
//         isEmpty: () => {
//             return currentLength === 0;
//         },
//         enqueue: function (element) {
//             if (!this.isFull()) {
//                 rear = (rear + 1) % capacity;
//                 items[rear] = element
//                 currentLength += 1;
//                 if (front === -1) {
//                     front = rear;
//                 }
//             }
//         },
//         dequeue: function () {
//             if (this.isEmpty()) {
//                 return null;
//             }
//             const item = items[front]
//             items[front] = null;
//             front = (front + 1) % capacity;
//             currentLength -= 1;
//             if (this.isEmpty()) {
//                 front = -1;
//                 rear = -1;
//             }
//             return item;
//         },
//         peek: function () {
//             if (!this.isEmpty()) {
//                 return items[front]
//             }
//             return null;
//         },
//         print:  function () {
//             if (this.isEmpty()) {
//                 console.log("Queue is Empty");
//             } else {
//                 let i;
//                 let str = '';
//                 for (i = front; i !== rear; i = (i + 1) % capacity) {
//                     str += items[i] + " "
//                 }
//                 str += items[i];
//                 console.log(str);

//             }
//         }
//     }

// }


// const queue = createCircularQueue(5);


// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);

// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.enqueue(10);
// queue.enqueue(20);
// console.log(queue.peek());

// console.log(queue.isFull());
// queue.print();


// Linked List
// const createNode = (val) => {
//     let value = val;
//     let next = null;
//     return { value, next }
// }

// Linked List with only head pointer
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
//             if (head.value === value) {
//                 item = head;
//                 head = head.next;
//                 size--;
//                 return item.value;
//             } else {
//                 let prev = head;

//                 while (prev.next && prev.next.value !== value) {
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
//                     if (curr.value === value) {
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
//                     listValues += `${curr.value} `;
//                     curr = curr.next;
//                 }
//                 console.log(listValues);

//             }

//         }
//     }
// }

// const list = createLinkedList();
// console.log(`List is Empty? ${list.isEmpty()}`);
// console.log(`List Size ${list.getSize()}`);
// list.print();

// list.insert(10, 0);
// list.print();

// list.insert(20, 0);
// list.print();

// list.insert(30, 1);
// list.print();

// list.insert(40, 2);
// list.print();

// list.reverse();
// list.print();


// console.log(list.removeFrom(10));
// console.log(list.removeFrom(0));
// list.print();

// console.log(list.removeFrom(1));
// list.print();

// console.log(list.removeFromValue(40));
// list.print();

// console.log(list.removeFromValue(20));
// list.print();

// console.log(list.getSize());

// console.log(list.search(50));


// Linked list with head and tail pointers
// export const createLinkedList = () => {
//     let head = null;
//     let tail = null;
//     let size = 0;

//     return {
//         isEmpty: () => {
//             return size === 0;
//         },
//         getSize: () => {
//             return size;
//         },
//         print: function () {
//             if (this.isEmpty()) {
//                 console.log("List is Empty!");

//             } else {
//                 let curr = head;
//                 let listValues = "";
//                 while (curr) {
//                     listValues += `${curr.value} `
//                     curr = curr.next;
//                 }
//                 console.log(listValues);

//             }
//         },
//         prepend: function (value) {
//             const node = createNode(value);
//             if (this.isEmpty()) {
//                 head = node;
//                 tail = node;
//             } else {
//                 node.next = head;
//                 head = node;
//             }
//             size++;
//         },
//         append: function (value) {
//             const node = createNode(value);
//             if (this.isEmpty()) {
//                 head = node;
//                 tail = node;
//             } else {
//                 tail.next = node;
//                 tail = node;
//             }
//             size++;
//         },
//         removeFromFront: function () {
//             if (this.isEmpty()) {
//                 return null;
//             }
//             const value = head.value;
//             head = head.next;
//             size--;
//             return value;
//         },
//         removeFromEnd: function () {
//             if (this.isEmpty()) {
//                 return null;
//             }
//             const value = tail.value;
//             if (this.size === 1) {
//                 this.head = null;
//                 this.tail = null;
//             } else {
//                 let prev = head;
//                 while (prev.next !== tail) {
//                     prev = prev.next;
//                 }
//                 prev.next = null;
//                 tail = prev;
//             }
//             size--;
//             return value;
//         },
//         getHead: function () {
//             return head;
//         }
//     }
// }

// const list = createLinkedList();
// console.log(`List is Empty? ${list.isEmpty()}`);
// console.log(`List Size ${list.getSize()}`);
// list.print();

// list.append(1);
// list.append(2);
// list.append(3);
// list.prepend(0)
// list.print();

// console.log(`List Size: ${list.getSize()}`);

// list.removeFromFront();
// list.print();

// list.removeFromEnd();
// list.print();


// Doubly Linked List
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

// const doublyLinkedList = () => {
//     let head = null;
//     let tail = null;
//     let size = 0;

//     return {
//         isEmpty() {
//             return size === 0;
//         },
//         getSize() {
//             return size;
//         },
//         print() {
//             if (this.isEmpty()) {
//                 console.log("The list is Empty!");
//             } else {
//                 let curr = head;
//                 let listValues = "";
//                 while (curr) {
//                     listValues += `${curr.value} `
//                     curr = curr.next;
//                 }
//                 console.log(listValues);

//             }
//         },
//         prepend(value) {
//             const node = createNode(value);
//             if (this.isEmpty()) {
//                 head = node;
//                 tail = node;
//             } else {
//                 head.prev = node
//                 node.next = head;
//                 node.prev = null;
//                 head = node;
//             }
//             size++;
//         },
//         append(value) {
//             const node = createNode(value);
//             if (this.isEmpty()) {
//                 head = node;
//                 tail = node;
//             } else {
//                 tail.next = node;
//                 node.prev = tail;
//                 tail = node;
//             }
//             size++;
//         },
//         insert(value, index) {
//             if (index === 0) {
//                 this.prepend(value);
//             }
//             else if (index === size) {
//                 this.append(value);
//             }
//             else {
//                 const mid = Math.floor((0 + size) / 2);
//                 const node = createNode(value);
//                 const updatePointers = (curr, node) => {
//                     curr.prev.next = node;
//                     node.prev = curr.prev;
//                     node.next = curr;
//                     curr.prev = node;
//                 }
//                 if (index > mid) {
//                     // from tail
//                     let curr = tail;
//                     for (let i = size; i > index + 1; i--) {
//                         curr = curr.prev;

//                     }
//                     updatePointers(curr, node)

//                 } else {
//                     // from head
//                     let curr = head;
//                     for (let i = 0; i < index; i++) {
//                         curr = curr.next;
//                     }
//                     updatePointers(curr, node);
//                 }
//                 size++;
//             }
//         },
//         removeFromFront() {
//             if (this.isEmpty()) {
//                 return null;
//             } else {
//                 let value = head.value;
//                 if (size === 1) {
//                     head = null;
//                     tail = null;
//                 } else {
//                     head.next.prev = null;
//                     head = head.next;
//                 }
//                 size--;
//                 return value;
//             }

//         },
//         removeFromEnd() {
//             if (this.isEmpty()) {
//                 return null;
//             } else {
//                 let value = tail.value;
//                 if (size === 1) {
//                     head = null;
//                     tail = null;
//                 }
//                 if (size > 1) {
//                     tail.prev.next = null;
//                     tail = tail.prev;
//                 }
//                 size--;
//                 return value;
//             }

//         },
//         remove(index) {
//             if (index === 0) {
//                 this.removeFromFront();
//             }
//             else if (index === size) {
//                 this.removeFromEnd();
//             }
//             else {
//                 const mid = Math.floor((0 + size) / 2);
//                 const updatePointers = (curr) => {
//                     curr.prev.next = curr.next;
//                     curr.next.prev = curr.prev;
//                 }
//                 if (index > mid) {
//                     // from tail
//                     let curr = tail;
//                     for (let i = size; i > index + 1; i--) {
//                         curr = curr.prev;

//                     }
//                     updatePointers(curr)
//                 } else {
//                     // from head
//                     let curr = head;
//                     for (let i = 0; i < index; i++) {
//                         curr = curr.next;
//                     }
//                     updatePointers(curr);
//                 }
//                 size--;
//             }
//         },
//         reverse() {
//             let curr = head;

//             while (curr) {
//                 let next = curr.next;
//                 curr.next = curr.prev;
//                 curr.prev = curr;
//                 curr = next;
//             }
//             head = tail;
//             tail = curr;
//         },
//         search(value) {
//             if (this.isEmpty()) {
//                 return -1;
//             } else {
//                 let curr = head;
//                 let i = 0;
//                 while (curr) {
//                     if (curr.value === value) {
//                         return `${value} found at index ${i}`
//                     }
//                     curr = curr.next;
//                     i++;
//                 }
//                 return -1;

//             }
//         }

//     }
// }

// const list = doublyLinkedList();
// console.log(list.isEmpty());

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)

// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)

// list.insert(10, 0)
// list.insert(20, 1)
// list.insert(30, 2)
// list.insert(40, 3)
// list.insert(50, 4)
// list.insert(60, 5)
// list.insert(70, 6)
// list.insert(80, 7)
// list.insert(90, 8)
// list.insert(100, 9)


// list.insert(200, 6);

// list.insert(300, 2);

// list.insert(400, 5);

// list.remove(0);
// list.remove(9);

// list.remove(8)
// list.remove(2)
// list.remove(4)



// console.log(`Size: ${list.getSize()}`);

// list.print();
// console.log(list.search(400));



// list.reverse();
// list.print();

// console.log(list.removeFromFront());
// console.log(list.removeFromFront());

// console.log(list.removeFromEnd());
// console.log(list.removeFromEnd());


// console.log(`Size: ${list.getSize()}`);

// list.print();

// Circular Singly Linked List
// const createNode = (val) => {
//     let value = val;
//     let next = null;

//     return { value, next }
// }

// const circularSinglyLinkedList = () => {
//     let head = null;
//     let tail = null;
//     let size = 0;

//     return {
//         isEmpty() {
//             return size === 0;
//         },
//         getSize() {
//             return size;
//         },
//         print() {
//             if (this.isEmpty()) {
//                 console.log("The list is Empty!");
//             } else {
//                 let curr = head;
//                 let listValues = "";
//                 do {
//                     listValues += `${curr.value} `;
//                     curr = curr.next;
//                 } while (curr !== head);
//                 console.log(listValues);

//             }
//         },
//         prepend(value) {
//             const node = createNode(value);
//             if (this.isEmpty()) {
//                 head = node;
//                 tail = node;
//                 tail.next = head;
//             } else {
//                 node.next = head;
//                 head = node;
//                 tail.next = node;
//             }
//             size++;
//         },
//         append(value) {
//             const node = createNode(value);
//             if (this.isEmpty()) {
//                 head = node;
//                 tail = node;
//                 tail.next = head;
//             } else {
//                 tail.next = node;
//                 tail = node;
//                 tail.next = head;
//             }
//             size++;
//         },
//     }
// }

// const list = circularSinglyLinkedList();
// console.log(`Is Empty? ${list.isEmpty()}`);
// console.log(`Size ${list.getSize()}`);

// list.print();
// // list.prepend(10);
// // list.prepend(20);
// // list.prepend(30);
// // list.prepend(40);
// // list.prepend(50);

// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);

// list.print();

// Hash Table

// const hashTable = (length) => {
//     const table = new Array(length);
//     const size = length;

//     return {
//         hash(key) {
//             let total = 0;
//             for (let i = 0; i < key.length; i++) {
//                 total += key.charCodeAt(i);
//             }
//             return total % size;
//         },
//         set(key, value) {
//             const index = this.hash(key);
//             // table[index] = value;
//             const bucket = table[index];
//             if (!bucket) {
//                 table[index] = [[key, value]]
//             }
//             else {
//                 const sameKeyItem = bucket.find(item => item[0] === key);
//                 if (sameKeyItem) {
//                     sameKeyItem[1] = value
//                 } else {
//                     bucket.push([key, value]);
//                 }
//             }
//         },
//         get(key) {
//             const index = this.hash(key);
//             // return table[index];
//             const bucket = table[index];
//             if (bucket) {
//                 const sameKeyItem = bucket.find(item => item[0] === key);
//                 if (sameKeyItem) {
//                     return sameKeyItem[1]
//                 }
//             }
//             return undefined;
//         },
//         remove(key) {
//             const index = this.hash(key);
//             // table[index] = undefined;
//             const bucket = table[index];
//             if(bucket){
//                 const sameKeyItem = bucket.find(item => item[0] === key)
//                 if(sameKeyItem){
//                     bucket.splice(bucket.indexOf(sameKeyItem), 1)
//                 }
//             }
//         },
//         display() {
//             for (let i = 0; i < table.length; i++) {
//                 if (table[i]) {
//                     console.log(i, table[i]);
//                 }
//             }
//         }
//     }

// }

// const table = hashTable(50);

// table.set("name", "Kashaf");
// table.set("age", 22);
// table.display();

// console.log(table.get("name"));

// table.set("mane", "Clark");
// table.set("name", "Diana")
// table.display()

// table.remove("name")
// table.display()


// Binary Search Tree

// Node
// const createNode = (val) => {
//     let value = val;
//     let left = null;
//     let right = null;

//     return { value, left, right }
// }

// const binarySearchTree = () => {
//     let root = null;


//     return {
//         isEmpty() {
//             return root === null;
//         },
//         insert(value) {
//             const newNode = createNode(value);
//             if (this.isEmpty()) {
//                 root = newNode;
//             } else {
//                 this.insertNode(root, newNode);
//             }
//         },

//         insertNode(root, newNode) {
//             if (newNode.value < root.value) {
//                 if (root.left === null) {
//                     root.left = newNode
//                 } else {
//                     this.insertNode(root.left, newNode)
//                 }
//             } else {
//                 if (root.right === null) {
//                     root.right = newNode;
//                 } else {
//                     this.insertNode(root.right, newNode)
//                 }
//             }
//         },
//         getRoot() {
//             return root;
//         },
//         search(root, value) {
//             if (!root) {
//                 return false;
//             } else {
//                 if (value === root.value) {
//                     return true;
//                 } else if (value < root.value) {
//                     return this.search(root.left, value)
//                 }
//                 else {
//                     return this.search(root.right, value)
//                 }
//             }
//         },
//         preOrder(root) {
//             if (root) {
//                 console.log(root.value);
//                 this.preOrder(root.left);
//                 this.preOrder(root.right);
//             }
//         },
//         inOrder(root) {
//             if (root) {
//                 this.inOrder(root.left);
//                 console.log(root.value);
//                 this.inOrder(root.right)
//             }
//         },
//         postOrder(root) {
//             if (root) {
//                 this.postOrder(root.left);
//                 this.postOrder(root.right);
//                 console.log(root.value);
//             }
//         },
//         levelOrder() {
//             let queue = createOptimisedQueue();
//             queue.enqueue(root);
//             while (!queue.isEmpty()) {
//                 let curr = queue.dequeue();
//                 console.log(curr.value);
//                 if (curr.left) {
//                     queue.enqueue(curr.left)
//                 }
//                 if (curr.right) {
//                     queue.enqueue(curr.right)
//                 }

//             }
//         },
//         min(root) {
//             if (!root.left) {
//                 return root.value
//             } else {
//                 return this.min(root.left)
//             }
//         },
//         max(root) {
//             if (!root.right) {
//                 return root.value
//             } else {
//                 return this.max(root.right)
//             }
//         },
//         deleteNode(root, value) {
//             if (root === null) {
//                 return root;
//             }
//             if (value < root.value) {
//                 root.left = this.deleteNode(root.left, value)
//             } else if (value > root.value) {
//                 root.right = this.deleteNode(root.right, value)
//             } else {
//                 if (!root.left && !root.right) {
//                     return null;
//                 }
//                 if (!root.left) {
//                     return root.right;
//                 } else if (!root.right) {
//                     return root.left;
//                 }
//                 root.value = this.min(root.right);
//                 root.right = this.deleteNode(root.right, root.value)
//             }
//             return root;
//         },
//         delete(value) {
//             this.root = this.deleteNode(root, value)
//         }

//     }
// }

// const bst = binarySearchTree();
// console.log(`Is Empty? ${bst.isEmpty()}`);

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)


// console.log(bst.search(bst.getRoot(), 10));
// console.log(bst.search(bst.getRoot(), 5));
// console.log(bst.search(bst.getRoot(), 15));
// console.log(bst.search(bst.getRoot(), 20));
// bst.preOrder(bst.getRoot());
// bst.inOrder(bst.getRoot());
// bst.postOrder(bst.getRoot());
// bst.levelOrder()
// console.log(bst.min(bst.getRoot()));
// console.log(bst.max(bst.getRoot()));

// bst.delete(10)
// bst.levelOrder()


// Graphs

// Adjacency Matrix 
// const matrix = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
// ]
// console.log(matrix[1][2]);

// Adjacency List
// const adjacencyList = {
//     'A': ['B'],
//     'B': ['A', 'C'],
//     'C': ['B']
// }
// console.log(adjacencyList['A']);

// const createGraph = () => {
//     let adjacencyList = {}

//     return {
//         addVertex(vertex) {
//             if (!adjacencyList[vertex]) {
//                 adjacencyList[vertex] = new Set();
//             }
//         },
//         addEdge(vertex1, vertex2) {
//             if (!adjacencyList[vertex1]) {
//                 this.addVertex(vertex1)
//             }
//             if (!adjacencyList[vertex2]) {
//                 this.addVertex(vertex2)
//             }
//             adjacencyList[vertex1].add(vertex2);
//             adjacencyList[vertex2].add(vertex1);
//         },
//         removeEdge(vertex1, vertex2) {
//             adjacencyList[vertex1].delete(vertex2)
//             adjacencyList[vertex2].delete(vertex1)
//         },
//         removeVertex(vertex) {
//             if (!adjacencyList[vertex]) {
//              return
//             }
//             for(let adjacentVertex of adjacencyList[vertex]){
//                this.removeEdge(vertex, adjacentVertex)
//             }
//             delete adjacencyList[vertex];
//         },
//         hasEdge(vertex1, vertex2) {
//             return adjacencyList[vertex1].has(vertex2) && adjacencyList[vertex2].has(vertex1)
//         },

//         display() {
//             for (let vertex in adjacencyList) {
//                 console.log(vertex + ' -> ' + [...adjacencyList[vertex]]);
//             }
//         }

//     }
// }

// const graph = createGraph()
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');

// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');

// graph.display();
// console.log(graph.hasEdge('A', 'C'));
// // graph.removeEdge('A', 'B');
// graph.removeVertex('B')
// graph.display();






































