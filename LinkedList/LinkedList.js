import LinkedListNode from './LinkedListNode';
import Comparator from '../utils/comparator/comparator';

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }
  
  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value);
    this.head = newNode;

    if(!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    // if there is no head yet then we make newNode the head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // attach newNode to end of linked list
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * @param {*} value;
   * @return {LinkedList}
   */
  delete(value) {

    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    
    // if head is being deleted then make the next node the head
    while (this.head && this.compare.equal(this.head.value)) {
        deletedNode = this.head;
        this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // if some arbitrary node is to be deleted, then check if that node's value is equal to currrent head. If not move to the next node repeat check.
      while(currentNode.next) {
        if(this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
        }
        else {
          currentNode = currentNode.next;
        }
      }
    }

    // check if tail is to be deleted
    if(this.compare.equal(this.tail.value, value)) {
      //previous condition will run indefinitely in order to get to here(tail). 
      this.tail = currentNode;
    }

    //deleted node is stored in deletedNode
    return deletedNode;
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedList}
   */
  find(value = undefined, callback = undefined) {
    if(!this.head) {
      return null;
    }

    let currentNode = this.head;

    while(currentNode) {
      //if callback is specified, then try to find node via callback, if callback value matches return the currentNode
      if(callback && callback(currentNode.value)) {
        return currentNode;
      }
    }
  }
}
