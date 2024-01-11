/**
 * 最大频率栈
 */
class FreqStack {
  private map: Map<number, number>
  private stack: number[][]

  constructor() {
    this.stack = []
    this.map = new Map()
  }

  push(val: number): void {
    const count: number = this.map.get(val) ?? 0
    this.map.set(val, count + 1)

    if (!this.stack[count]) this.stack.push([])
    this.stack[count].push(val)
  }

  pop(): number {
    const size: number = this.stack.length - 1
    const res: number = this.stack[size].pop() as number
    this.map.set(res, this.map.get(res)! - 1)
    if (!this.stack[size].length) this.stack.pop()
    return res
  }
}

/**
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(val)
* var param_2 = obj.pop()
*/

const freqStack = new FreqStack();
freqStack.push(5);//堆栈为 [5]
freqStack.push(7);//堆栈是 [5,7]
freqStack.push(5);//堆栈是 [5,7,5]
freqStack.push(7);//堆栈是 [5,7,5,7]
freqStack.push(4);//堆栈是 [5,7,5,7,4]
freqStack.push(5);//堆栈是 [5,7,5,7,4,5]
freqStack.pop();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
freqStack.pop();//返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
freqStack.pop();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
freqStack.pop();//返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。