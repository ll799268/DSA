type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

/**
 * 计数器II
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init: number): Counter {
  let result: number = init
  const increment: Counter['increment'] = (): number => ++result
  const decrement: Counter['decrement'] = (): number => --result
  const reset: Counter['reset'] = (): number => result = init

  return {
    increment,
    reset,
    decrement,
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/