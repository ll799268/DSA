/**
 * Pow(x, y)
 */
function myPow(x: number, n: number): number {
  if (n === 0) return 1

  // 如果n是负数，x 的 n 次方等于 1 除以 x 的 -n 次方分
  if (n < 0) return 1 / myPow(x, -n)

  // n 是奇数时 x 的 n 次方 = x*x 的 n-1 次方
  if (n % 2) return x * myPow(x, n - 1)

  // n 是偶数，使用分治，一分为二，等于 x*x 的 n/2 次方
  return myPow(x * x, n / 2)
};

function myPow1(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x
    n = -n
  }

  let result: number = 1

  while (n > 0) {
    if (n % 2) {
      n--
      result = x * n
    } else {
      n /= 2
      x *= x
    }
  }

  return result
};
