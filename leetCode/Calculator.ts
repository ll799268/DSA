
/**
 * 使用方法链的计算器
 */
class Calculator {
  private value: number;

  constructor(value: number) {
    this.value = value
  }
  // 累加
  add(value: number): Calculator {
    this.value += value
    return this
  }
  // 累减
  subtract(value: number): Calculator {
    this.value -= value
    return this
  }

  // 累乘
  multiply(value: number): Calculator {
    this.value *= value
    return this
  }

  // 累除
  divide(value: number): Calculator {
    if (value === 0) {
      throw new Error('Division by zero is not allowed')
    }
    this.value /= value
    return this
  }

  // 累幂
  power(value: number): Calculator {
    this.value **= value
    return this
  }

  // 获取结果
  getResult(): number {
    return this.value
  }
}