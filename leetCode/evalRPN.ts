/**
 * 逆波兰表达式求值
 */
function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  let temp: number = 0

  for (let t of tokens) {
    switch (t) {
      case '+':
        temp = stack.pop()
        stack.push(stack.pop() + temp)
        break
      case '-':
        temp = stack.pop()
        stack.push(stack.pop() - temp)
        break
      case '*':
        temp = stack.pop()
        stack.push(stack.pop() * temp)
        break
      case '/':
        temp = stack.pop()
        stack.push(Math.trunc(stack.pop() / temp))
        break
      default:
        stack.push(+t)
        break
    }
  }

  return stack.pop()
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));
