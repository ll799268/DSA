/**
 * 创建 Hello World 函数
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World"
  }
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/