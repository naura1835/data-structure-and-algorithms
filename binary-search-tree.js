class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getRootNode() {
    return this.root;
  }

  search(key, searchTree = this.root) {
    if (!this.root) return null;

    if (key == searchTree.val) return searchTree;

    if (key < searchTree.val) this.search(key, searchTree.left);
    else if (key > searchTree.val) this.search(key, searchTree.right);
  }

  insert(value, tree = this.root) {
    // let newNode = new Node(value);

    if (!this.root) {
      this.root = new Node(value);
      return this.root;
    }

    if (value < tree.val) {
      if (tree.left == null) {
        tree.left = new Node(value);
        return;
      } else {
        this.insert(value, tree.left);
      }
    } else if (value > tree.val) {
      if (tree.right == null) {
        tree.right = new Node(value);
        return;
      } else {
        this.insert(value, tree.right);
      }
    }
    return tree;
  }

  //   delete(value) {}
}

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);

console.log(BST.getRootNode());
// console.log(BST.search(15));
