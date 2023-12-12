/**
 * 返回传递的参数的长度
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */