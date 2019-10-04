const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {
      let node = new Node(data);
      if(!this._head) {
        this._head = node;
        this._tail = node;
      } else {
        //this.head = this._head;
        let current = this._tail;
        this._tail = node;
        node.prev = current;
        current.next = node;
      }
      this.length++;
      return this;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      let counter = 0;
      let current = this._head;
      while(counter !== this.length){
        if (counter === index) {
          return current.data;
        }
        counter++;
        current = current.next;
      }
    }

    insertAt(index, data) {
      if (this.length === 0) {
        let node = new Node(data);
        this._head = node;
        this._tail = node;
        this.length = 1;
        return this;
      }
      let node = new Node(data);
      let counter = 0;
      let current = this._head;
      while(counter !== this.length){
        if (counter === index) {
          node.prev = current.prev;
          node.next = current;
          current.prev.next = node;
          current.prev = node;
          this.length++;
          break;
        }
        counter++;
        current = current.next;
      }
      return this;
    }

    isEmpty() {
      if (this._head === null) return true;
      return false;
    }

    clear() {
      let node = new Node();
      this._head = node;
      this._tail = node;
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      let node = new Node();
      let counter = 0;
      let current = this._head;
      if (this.length === 1) return this.clear();
      while(counter !== this.length){
        if (counter === index) {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          current = node;
          this.length--;
          break;
        }
        counter++;
        current = current.next;
      }
      return this;
    }

    reverse() {
      let node = this._head;
      this._head = this._tail;
      this._tail = node;

      let counter = 0;
      let prev =  null;
      let next;

      while(counter < this.length) {
        next = node.next;
        node.prev = next;
        node.next = prev;
        prev = node;
        node = next;
        counter++;
      }
      return this;
    }

    indexOf(data) {
      let counter = 0;
      let current = this._head;
      while(counter !== this.length){
        if (current.data !== data){
          counter ++;
          current = current.next;
          continue;
        }
        return counter;
      }
      return -1;
    }
}

module.exports = LinkedList;
