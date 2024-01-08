type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

/**
 * 只允许函数执行一次
 * @param {Function} fn
 * @return {Function}
 */
function once(fn: Function): OnceFn {
  let calls: number = 1
  return function (...args) {
    if (calls++ === 1) {
      return fn(...args)
    }
  }
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */