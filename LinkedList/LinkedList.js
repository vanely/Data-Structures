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
}
