/**
 * 最小栈
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let result = this.stack[0]
  this.stack.forEach(item => {
    if (item < result) {
      result = item
    }
  })

  return result
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */