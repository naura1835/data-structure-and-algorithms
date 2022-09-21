class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    // this.tail = null;
    // this.length = 0;
  }

  //you can insert at any part of the list, so do that note to take care of at the start,
  //end, middle. Same goes for removing
  // push(val) {
  //   const newNode = new Node(val);

  //   if (!this.head) {
  //     this.head = newNode;
  //     this.tail = this.head;
  //   } else {
  //     this.tail.next = newNode;
  //     this.tail = newNode;
  //   }
  //   this.length++;
  //   return this;
  // }

  //this will add a new node at the end of the list
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
    }
  }
  //insert in the middle of list
  insert(val, nextNode) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next != null) {
        if (current.next == nextNode) {
          current.next = newNode;
          newNode = nextNode;
          return;
        }
        current = current.next;
      }
    }
  }

  //add element at the beginning of list
  unshit(val) {
    const newNode = new Node(val);
    //check if list is empty here
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  //remove element from linked list
  delete(val) {
    if (!this.head) return;

    if (this.head.value == val) {
      let temp = this.head;
      this.head = temp.next;
      return;
    }

    let current = this.head;

    while (current.next != null) {
      if (current.next.value == val) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}
