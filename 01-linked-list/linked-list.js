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

  insert(index, value) {}
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

const myLinkedList2 = new LinkedList(0);
myLinkedList2.push(1);
myLinkedList2.push(2);
myLinkedList2.push(3);

console.log('get method', myLinkedList2.get(2));

console.log(myLinkedList2.set(2, 5));
console.log(myLinkedList2);

console.log('get method after set new value', myLinkedList2.get(2));
