/**
 * 数组原型对象的最后一个元素
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1]
};

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/