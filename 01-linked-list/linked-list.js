/**
 * Linked list -> No indexes
 * Linked list are not contiguous places in memory. They can be over the place
 * Linked list have head and tail
 * Each item in Linked list is pointing to the next item
 * Tail is pointing to null (Null terminated list)
 * Node are made up from the value and pointingTo
 */
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {}
  unshift(value) {}
  insert(index, value) {}
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new LinkedList(4);

console.log(linkedList);
