/**
 * Linked list -> No indexes
 * Linked list are not contiguous places in memory. They can be over the place
 * Linked list have head and tail
 * Each item in Linked list is pointing to the next item
 * Tail is pointing to null (Null terminated list)
 * Node are made up from the value and pointingTo
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.tail;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}

const myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(11);

const poppedNode = myLinkedList.pop();
// console.log(poppedNode);
// myLinkedList.pop();

myLinkedList.unshift(7);
// myLinkedList.shift();

console.log('final', JSON.stringify(myLinkedList, null, 2));

console.log('========================================================');

const myLinkedList2 = new LinkedList(0);
myLinkedList2.push(1);
myLinkedList2.push(2);
myLinkedList2.push(3);

console.log('get method', myLinkedList2.get(2));

console.log(myLinkedList2.set(2, 5));
console.log(myLinkedList2);

console.log('get method after set new value', myLinkedList2.get(2));
console.log('========================================================');

// insert method
const myLinkedList3 = new LinkedList(0);
myLinkedList3.push(2);
myLinkedList3.insert(1, 1);

console.log('myLinkedList3', myLinkedList3);
console.log('========================================================');
// remove method
const myLinkedList4 = new LinkedList(11);
myLinkedList4.push(3);
myLinkedList4.push(4);
myLinkedList4.push(8);

myLinkedList4.remove(2);
console.log('myLinkedList4', myLinkedList4); // 4 removed
console.log('========================================================');
// reverse method
const myLinkedList5 = new LinkedList(0);
myLinkedList5.push(1);
myLinkedList5.push(2);
myLinkedList5.push(3);

console.log('myLinkedList5', myLinkedList5); // 4 removed
console.log('myLinkedList5 reverse', myLinkedList5.reverse());
