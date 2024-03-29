/**
 * 用队列实现栈
 */
class MyStack {
  private queue: number[]
  constructor() {
    this.queue = []
  }

  push(x: number): void {
    this.queue.push(x)
  }

  pop(): number {
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift()!)
    }
    return this.queue.shift()!
  }

  top(): number {
    const res: number = this.pop()
    this.push(res)
    return res
  }

  empty(): boolean {
    return !this.queue.length
  }
}

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/