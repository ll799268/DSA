type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

/**
 * 分块数组
 */
function chunk(arr: Obj[], size: number): Obj[][] {
  if (size > arr.length) size = arr.length

  const result: Obj[][] = []

  const num: number = Math.floor(arr.length / size)
  const last: number = arr.length % size

  let i: number = num

  while (i) {
    result.push(arr.slice((num - i--) * size, (num - i) * size))
  }

  last && result.push(arr.slice(num * size, arr.length))

  return result
};