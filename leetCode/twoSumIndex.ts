/**
 * 排序数组中两个数字之和
 */
function twoSum(numbers: number[], target: number): number[] | void {
  const map = new Map<number, number>()

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) as number, i]
    } else {
      map.set(numbers[i], i)
    }
  }
};

function twoSum(numbers: number[], target: number): number[] | void {
  let i: number = 0,
    j: number = numbers.length - 1

  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum === target) {
      return [i, j]
    } else if (sum < target) {
      i++
    } else {
      j--
    }
  }
}