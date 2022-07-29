class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}

//stack uses a last in first out approach
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // The push method receives a value and adds it to the "top" of the stack
  push(value) {
    const newNode = new Node(value);

    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.last;
      this.last = newNode;
      this.last.previous = temp;
    }
    return this.size++;
  }
  //The pop method removes a value from the to[p of the stack]
  pop() {
    if (!this.size) {
      return null;
    }

    let temp = this.last;

    if (this.first == this.last) {
      this.first = null;
    }
    this.last = temp.previous;
    this.size--;

    return temp.value;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.first);
console.log(stack.last);
// console.log(stack.size);

stack.push(400);

console.log(stack.last);
console.log(`you just got popped ${stack.pop()}`);

console.log(stack.last);
