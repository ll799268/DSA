
/**
 * 使用方法链的计算器
 */
class Calculator {

  /** 
   * @param {number} value
   */
  constructor(value) {
    this.value = value
  }

  /** 
   * 累加
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.value += value
    return this
  }

  /** 
   * 累减
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.value -= value
    return this
  }

  /** 
   * 累乘
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.value *= value
    return this
  }

  /** 
   * 累除
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed')
    }
    this.value /= value
    return this
  }

  /** 
   * 累幂
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.value **= value
    return this
  }

  /** 
   * 获取结果
   * @return {number}
   */
  getResult() {
    return this.value
  }
}