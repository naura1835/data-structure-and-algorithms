class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLList {
  constructor() {
    this.head = null;
  }

  prepend(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  append(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = newNode;
      newNode.prev = current;
    }
  }

  delete(val) {
    if (!this.head) return;

    if (this.head.value == val) {
      let temp = this.head;

      this.head = temp.next;
      this.head.prev = null;
      return;
    }

    let current = this.head;

    while (current.next != null) {
      if (current.next.value == val) {
        current.next = current.next.next;
        current.next.prev = current;
      }
    }
  }
}
