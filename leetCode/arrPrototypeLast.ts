declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

/**
 * 数组原型对象的最后一个元素
 */
Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1
};

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/

export { };