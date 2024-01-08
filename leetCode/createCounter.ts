/**
 * 计数器
 * @param {number} n 
 * @returns {Function} counter
 */
function createCounter(n: number): () => number {
  return function () {
    return n++
  }
}


/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/