type Fn<T> = () => Promise<T>

/**
 * 并行执行多个函数
 */
function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const result: T[] = []
    let count: number = 0
    functions.forEach(async (cur, i) => {
      try {
        const r = await cur()
        result[i] = r
        count++
        if (count === functions.length) {
          resolve(result)
        }
      } catch {
        reject('Error')
      }
    })
  })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */