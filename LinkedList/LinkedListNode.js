export default class LinkedListNode {
  /**
   * @param {*} value
   * @param {*} next
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * @param {*} callback
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
