/**
 * 包装数组
 */
class ArrayWrapper {
  private nums: number[]

  constructor(nums: number[]) {
    this.nums = nums
  }

  // 数组累加
  valueOf(): number {
    let result = 0
    for (let i = 0; i < this.nums.length; i++) {
      result += this.nums[i]
    }
    return result
  }

  // 转换为字符串数组
  toString(): string {
    return JSON.stringify(this.nums)
  }
};

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/