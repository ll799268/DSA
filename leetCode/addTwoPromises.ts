type P = Promise<number>

/**
 * 两个promise相加
 */
async function addTwoPromises(promise1: P, promise2: P): P {
  const result: number[] = await Promise.all([promise1, promise2])
  return new Promise((resolve) => {
    resolve(result.reduce((c, p) => c + p))
  })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */