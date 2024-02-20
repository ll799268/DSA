/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

/**
 * 窥探迭代器
 */
class PeekingIterator {
  private index: number
  private iterator: number[]
  constructor(iterator: Iterator) {
    this.iterator = iterator.data
    this.index = iterator.index
  }

  peek(): number {
    const { index, iterator } = this
    return iterator[index]
  }

  next(): number {
    const { iterator } = this
    return iterator[this.index++]
  }

  hasNext(): boolean {
    return this.index < this.iterator.length
  }
}

/**
* Your PeekingIterator object will be instantiated and called as such:
* var obj = new PeekingIterator(iterator)
* var param_1 = obj.peek()
* var param_2 = obj.next()
* var param_3 = obj.hasNext()
*/