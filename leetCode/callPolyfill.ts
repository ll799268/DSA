type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

declare global {
  interface Function {
    callPolyfill(context: Record<string, JSONValue>, ...args: JSONValue[]): JSONValue;
  }
}

/**
 * 使用自定义上下文调用函数
 */
Function.prototype.callPolyfill = function (context, ...args): JSONValue {
  return this.call(context, ...args)
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */