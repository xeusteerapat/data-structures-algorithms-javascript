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

  unshift(value) {}
  insert(index, value) {}
}

const myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.pop();
myLinkedList.pop();

console.log(myLinkedList);
