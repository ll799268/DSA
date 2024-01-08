/**
 * 创建 Hello World 函数
 */
function createHelloWorld(): Function {
  return function (...args: any[]): string {
    return "Hello World"
  };
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/