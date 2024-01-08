type F = (x: number) => number;

/**
 * 复合函数
*/
function compose(functions: F[]): F {
  return function (x) {
    let i: number = functions.length
    while (i--) {
      x = functions[i](x)
    }
    return x
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
