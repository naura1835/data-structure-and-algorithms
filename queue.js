class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//queue uses a first in first out approach
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;

    let temp = this.first;

    this.first = temp.next;
    this.size--;

    return temp.value;
  }
}

const queue = new Queue();

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);

console.log(queue.first);
console.log(queue.last);
console.log(queue.size);

queue.enqueue(400);
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.first);
console.log(queue.last);
