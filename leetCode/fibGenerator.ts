/**
 * 生成斐波那契数列
 */
function* fibGenerator(): Generator<number, any, number> {
  let pre: number = 0,
    cur: number = 1;

  yield pre;
  yield cur;

  while (true) {
    yield pre + cur;
    [pre, cur] = [cur, pre + cur];
  }
};

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/