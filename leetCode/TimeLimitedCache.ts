interface ITimer {
  key: number,
  value: number,
  t: number
}

/**
 * 具有时间限制的缓存
 */
class TimeLimitedCache {
  private timer: Map<number, ITimer>

  constructor () {
    this.timer = new Map()
  }

  set(key: number, value: number, duration: number): boolean {
    const now: number = Date.now()
    const time: ITimer | undefined = this.timer.get(key)
    let isExpire: boolean = !time ? false : now < time.t

    this.timer.set(key, {
      key,
      value,
      t: now + duration
    })

    return isExpire
  }

  get(key: number): number {
    const time: ITimer | undefined = this.timer.get(key)
    const now: number = Date.now()
    if (!time || now > time.t) {
      return -1
    }

    return time.value
  }

  count(): number {
    let result: number = 0
    const now: number = Date.now()

    for (const [k, v] of this.timer.entries()) {
      if (v.t > now) result++
    }

    return result
  }
}

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/

const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1