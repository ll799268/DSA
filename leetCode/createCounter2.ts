type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

/**
 * 计数器II
 */
function createCounter2(init: number): Counter {
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