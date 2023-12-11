/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let result = init
  const increment = () => ++result
  const decrement = () => --result
  const reset = () => result = init

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