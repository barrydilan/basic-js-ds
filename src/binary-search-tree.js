const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  // Insert a node into the tree
  add(data) {
    const node = {
      data: data,
      left: null,
      right: null
    };

    // If tree is empty, set the new node as root node
    if (this.rootNode === null) {
      this.rootNode = node;
      return;
    } else {
      let current = this.rootNode;
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node;
            return;
          }
          current = current.left;
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = node;
            return;
          }
          current = current.right;
        } else {
          return;
        }
      }
    }
  }

  // Check if a node exists in the tree
  has(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // Find a node in the tree
  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  // Remove a node from the tree
  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // If the node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // If the node has no left child
        if (node.left === null) {
          return node.right;
        }
        // If the node has no right child
        if (node.right === null) {
          return node.left;
        }
        // If the node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.rootNode = removeNode(this.rootNode, data);
  }

  // Find the minimum value in the tree
  min() {
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  // Find the maximum value in the tree
  max() {
    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}


module.exports = {
  BinarySearchTree
};